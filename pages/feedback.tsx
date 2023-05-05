import * as Form from '@radix-ui/react-form';
import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon, ChevronUpIcon, Loader2 as Loader } from "lucide-react"
import * as Select from '@radix-ui/react-select';
import { useSession } from 'next-auth/react';
import { Feedback } from '@/types/feedback';


export default function Feedback() {
    const { data: session, status } = useSession()
    const defaultFormState = {
        feedbackContent: '',
        channel: null,
    }
    const channelOptions = ["Facebook", "Product Hunt"]
    const [buttonIsLoading, setButtonIsLoading] = useState(false)
    const [disabledSubmitBtn, setDisabledSubmitBtn] = useState(true)
    const [feedbackData, setFeedbackData] = useState(defaultFormState)

    const handleChange = (e) => {
        if(e.target){
            const {name, value} = e.target
            setFeedbackData({...feedbackData, [name]: value})
        }
        else{
            // select.root does not have e.target, hence this logic
            setFeedbackData({...feedbackData, channel: e})
        }

        setDisabledSubmitBtn(false)
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setButtonIsLoading(true)
        // on submit, call endpoint and submit data
        const submittedData: Feedback = {
            feedbackContent: feedbackData.feedbackContent,
            channel: feedbackData.channel,
            userEmail: session.user.email
        }

        // link to api endpoint
        fetch(`/api/feedback/`,{
            method: "POST",
            headers: {"Content-Type": "application/json"}, // Specify the content type as JSON
            body: JSON.stringify(submittedData), // Convert data object to JSON string
        })
        .then(response => {

            if(response.ok){
                console.log("form submitted")
                // once resp received, set disabled submit button to false and loading button to false
                setFeedbackData(defaultFormState)
                setButtonIsLoading(false)
                setDisabledSubmitBtn(false)
            }
        })
        .catch(error => {
            // handle error
            // once resp received, set disabled submit button to false and loading button to false
            setButtonIsLoading(false)
            setDisabledSubmitBtn(false)
        });

        
    }

    return (
        <div className='h-screen px-[5%] mt-6 md:px-[40%]'>
            <Form.Root>
                <Form.Field name="date" className="grid mb-[10px]">
                    <Form.Label className="text-[16px] font-semibold leading-[35px]">Feedback / Suggestions</Form.Label>

                    <Form.Control asChild key={"textarea"} required>
                        <Textarea
                        name="feedbackContent"
                        className="my-1 dark:border-zinc-50"
                        placeholder="Type your feedback here"
                        onChange={handleChange}
                        value = {feedbackData.feedbackContent}

                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field name="channel" className="grid mb-[10px]">
                    <Form.Label className="text-[16px] font-semibold leading-[35px]">How did you know about us?</Form.Label>

                    <Form.Control asChild key={"dropdown"}>
                    <Select.Root
                        name="channel"
                        onValueChange={handleChange}
                        value={feedbackData.channel}
                    >
                        <Select.Trigger
                            className="border-2 dark:border-white inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none h-[35px] gap-[5px] shadow-[0_2px_10px] shadow-black/10"
                            aria-label="marketing-channel"
                        >
                        <Select.Value 
                            placeholder={"Pick an option"} 
                        />
                        <Select.Icon>
                            <ChevronDownIcon />
                        </Select.Icon>
                        </Select.Trigger>
                        <Select.Portal>
                            <Select.Content className="border-2 dark:bg-black overflow-hidden rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                                <Select.ScrollUpButton className="flex items-center justify-center h-[25px] cursor-default">
                                    <ChevronUpIcon />
                                </Select.ScrollUpButton>

                                <Select.Viewport
                                    className='p-[5px]'
                                >
                                    <Select.Group>
                                        {
                                            channelOptions.map((option,index) => {
                                                return <Select.Item key={index} value={option}>
                                                    <Select.ItemText>
                                                        {option}   
                                                    </Select.ItemText>
                                                </Select.Item> 
                                            })
                                        }
                                    </Select.Group>
                                </Select.Viewport>
                                <Select.ScrollDownButton className="flex items-center justify-center h-[25px] cursor-default">
                                    <ChevronDownIcon />
                                </Select.ScrollDownButton>
                            </Select.Content>
                        </Select.Portal>
                    </Select.Root>
                    </Form.Control>
                </Form.Field>


                <Form.Submit asChild>
                    {<Button
                        className={`mt-4 mb-20 w-full rounded-[4px] text-[16px] leading-none`}
                        disabled = {disabledSubmitBtn} 
                        onClick={(e) => handleSubmit(e)}
                    >
                    {buttonIsLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                    {buttonIsLoading ? "Submitting..." : "Submit"}
                    </Button>}
                </Form.Submit>
            </Form.Root>
        </div>
    )
};
