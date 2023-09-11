"use client"
import * as Form from '@radix-ui/react-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { format } from "date-fns"
import { Calendar as CalendarIcon, Loader2 as Loader } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover,PopoverContent,PopoverTrigger } from "@/components/ui/popover"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Input } from '@/components/ui/input';
import { lifeExperienceFormHeaders } from '@/data/form/lifeExperienceData';


export default function Page() {
    const router = useRouter()
    const { data: session, status } = useSession()
    const [loveLanguageValue, setLoveLanguageValue] = useState("")
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(true)
    const [dateErrorMsg, setDateErrorMsg] = useState(false)
    const [buttonIsLoading, setButtonIsLoading] = useState (false)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

    const handleSelection = (value) => {
        if(value == "") {
            setDisableSubmitBtn(true)
        }
        else{
            setDisableSubmitBtn(false)
        }
        setLoveLanguageValue(value)

    }

    const handleSubmit = () => {
        if(!selectedDate){
            setDateErrorMsg(true)
            return 
        }
        console.log("confirm button clicked")
        setButtonIsLoading(true)
        setDateErrorMsg(false)
        const submittedData = {
            userEmail: session!.user!.email,
            selectedDate: selectedDate?.toDateString(),
            loveLanguageValue: loveLanguageValue,
        }

        // link to api endpoint
        fetch(`/api/relationship/post/`,{
            method: "POST",
            headers: {"Content-Type": "application/json"}, // Specify the content type as JSON
            body: JSON.stringify(submittedData), // Convert data object to JSON string
        })
        .then(response => {
            console.log("response for /api/relationship/post: ", response)
            if(response.ok){
                setButtonIsLoading(false)
                router.push('/relationship/dashboard')
            }
        })
        .catch(error => {
            // handle error
            console.log("error: ", error)
        });
        
    }

    return (
        <div className='h-screen px-[5%] mt-8 md:mt-[5%] md:px-[30%]'>
                <Form.Root>
                <Form.Field name="date" className="grid mb-[10px]">
                        <Form.Label className="text-[16px] font-semibold leading-[35px]">Date</Form.Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "justify-start text-left font-normal dark:border-zinc-50",
                                    !selectedDate && "text-muted-foreground"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                {/* <Calendar
                                mode="single"
                                // dateFormat="MM/yyyy"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                initialFocus
                                /> */}
                            </PopoverContent>
                        </Popover>
                        {dateErrorMsg && <p className='text-red-600'>Please select a date.</p>}
                    </Form.Field>

                    {
                        lifeExperienceFormHeaders.map((field,index) => 
                        (<Form.Field key={index} className="grid mb-[10px]" name={field.name}>
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-semibold leading-[35px]">{field.title}</Form.Label>
                            </div>
                            {
                                field.inputField.map((input,index)=>
                                    <Form.Control asChild key={index} required={index == 0}>
                                        <Input
                                        maxLength={100}
                                        className="my-1 dark:border-zinc-50"
                                        name={input.name}
                                        // value={formData[input.name]}
                                        placeholder={input.placeholder}
                                        // onChange={handleChange}
                                        />
                                    </Form.Control>)
                            }
                            <Form.Message match="valueMissing">
                                This field is required
                            </Form.Message>
                        </Form.Field>)
                        )
                    }
                </Form.Root>
                <Form.Submit asChild>
                    <Button
                        className={`mt-4 mb-8 w-full rounded-[4px] text-[16px] leading-none`}
                        disabled = {disableSubmitBtn} 
                        onClick={handleSubmit}
                    >
                        {buttonIsLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                        {buttonIsLoading ? "Updating..." : "Confirm"}
                    </Button>
                </Form.Submit>
                <Link 
                    className='text-center'
                    href='/relationship/dashboard'>
                        <p className='underline'>Go to Dashboard</p>
                </Link>
        </div>
    )
};
