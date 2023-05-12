"use client"
import * as Form from '@radix-ui/react-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Loader2 as Loader } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover,PopoverContent,PopoverTrigger } from "@/components/ui/popover"
import useSWR from 'swr'
import { ServerProps } from '@/types/serverProps';
import { currentDate } from '@/utils/date';
import { fetcher } from '@/utils/fetcher';
import { formHeaderAndPlaceholders } from '@/data/form/formData';
import LoadingForm from '@/components/loadingSkeleton/LoadingForm';
import { useSession } from 'next-auth/react';


export default function EntryPage(){
    const { data: session, status } = useSession()
    const { data: entries, error, isLoading } = useSWR(`/api/entry/get/all?params=${session?.user?.email}`, fetcher)
    const defaultFormState = {
        gratefulOne: '',
        gratefulTwo: '',
        gratefulThree: '',
        focusOne: '',
        focusTwo: '',
        focusThree: '',
        wentWellOne: '',
        wentWellTwo: '',
        wentWellThree: '',
        notWellOne: '',
        notWellTwo: '',
        notWellThree: '',
        improveOne: '',
    }
    const router = useRouter()
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [formData, setFormData] = useState(defaultFormState);
    const [disabled, setDisabled] = useState(true)
    const [buttonIsLoading, setButtonIsLoading] = useState(false)
    const [stepCount, setStepCount] = useState(0)
    const todayEntry = entries?.entries?.filter(entry => entry.todayDate == selectedDate?.toDateString())[0]
    // console.log(todayEntry)
    const currentFormAndPlaceHolders = formHeaderAndPlaceholders?.filter(record => record.step == stepCount)

    let isNextButtonDisabled = true

    if (stepCount === 0) {
        isNextButtonDisabled = !formData.focusOne || !formData.gratefulOne;
      } else if (stepCount === 1) {
        isNextButtonDisabled = !formData.wentWellOne || !formData.notWellOne;
      } else {
        isNextButtonDisabled = true;
      }    

    useEffect(() => {
        if(!isLoading && todayEntry){
            setFormData({
                gratefulOne: todayEntry.gratefulContent[0],
                gratefulTwo: todayEntry.gratefulContent[1],
                gratefulThree: todayEntry.gratefulContent[2],
                focusOne: todayEntry.focusContent[0],
                focusTwo: todayEntry.focusContent[1],
                focusThree: todayEntry.focusContent[2],
                wentWellOne: todayEntry.wentWellContent[0],
                wentWellTwo: todayEntry.wentWellContent[1],
                wentWellThree: todayEntry.wentWellContent[2],
                notWellOne: todayEntry.notSoWellContent[0],
                notWellTwo: todayEntry.notSoWellContent[1],
                notWellThree: todayEntry.notSoWellContent[2],
                improveOne: todayEntry.improvementContent[0]
            })
        }
        else if(!todayEntry){
            setFormData(defaultFormState)
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[isLoading, todayEntry])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        setDisabled(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setButtonIsLoading(true)
        // console.log("submitted")
        let submittedData = {
            grateful: [formData.gratefulOne,formData.gratefulTwo,formData.gratefulThree],
            focus: [formData.focusOne,formData.focusTwo,formData.focusThree],
            wentWell: [formData.wentWellOne,formData.wentWellTwo,formData.wentWellThree],
            notWell: [formData.notWellOne,formData.notWellTwo,formData.notWellThree],
            improve: formData.improveOne,
            userEmail: session!.user!.email,
            selectedDate: selectedDate?.toDateString()
        }
        
        let validInput = Boolean(submittedData.grateful.concat(submittedData.focus).join("").trim())
        if(!validInput){
            setButtonIsLoading(false)
            // return console.log("invalid form input")
        }


        // link to api endpoint
        fetch(`/api/entry/post/`,{
            method: "POST",
            headers: {"Content-Type": "application/json"}, // Specify the content type as JSON
            body: JSON.stringify(submittedData), // Convert data object to JSON string
        })
        .then(response => {
          // handle response
            // console.log("form submission successful")
            // inform user that form is submitted
            // redirect user to entry?
            // console.log("response: ", response)
            if(response.ok){
                // remove item to ensure that focus list will be updated and refetched by useEffect in '/'
                localStorage.removeItem(currentDate.toDateString())
                router.push('/')
            }
        })
        .catch(error => {
          // handle error
        });

    }

    if(isLoading) return <LoadingForm/>

    return(
        <div className='h-screen px-[5%] mt-6 md:px-[40%]'>
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
                            <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </Form.Field>
                {
                    currentFormAndPlaceHolders.map((field,index) => 
                    (<Form.Field key={index} className="grid mb-[10px]" name={field.name}>
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[16px] font-semibold leading-[35px]">{field.title}</Form.Label>
                        </div>
                        {
                            field.inputField.map((input,index)=>
                                <Form.Control asChild key={index} required={index == 0}>
                                    <Input
                                    maxLength={45}
                                    className="my-1 dark:border-zinc-50"
                                    type={input.type}
                                    name={input.name}
                                    value={formData[input.name]}
                                    placeholder={input.placeholder}
                                    onChange={handleChange}
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

            <div className='flex gap-10 px-5'>
                <Button
                        className={`my-2 w-full rounded-[4px] text-[16px]`}
                        onClick={() => setStepCount(stepCount - 1)}
                        disabled= {stepCount <= 0}
                    >
                        Previous
                </Button>
                <Button
                        className={`my-2 w-full rounded-[4px] text-[16px]`}
                        onClick={() => setStepCount(stepCount + 1)}
                        disabled= {isNextButtonDisabled}
                    >
                        Next
                </Button>
            </div>
            <Form.Submit asChild>
                {stepCount == 2 && <Button
                    className={`mt-4 mb-20 w-full rounded-[4px] text-[16px] leading-none`}
                    disabled = {disabled} 
                    onClick={(e) => handleSubmit(e)}
                >
                    {buttonIsLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                    {buttonIsLoading ? "Submitting..." : "Submit Reflection"}
                </Button>}
            </Form.Submit>
        </div>
    )
} 