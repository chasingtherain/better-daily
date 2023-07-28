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
import { Textarea } from '@/components/ui/textarea';

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

    const categoryNames = [
        {name:"Communication Issues", value: "communication"},
        {name:"Financial Disagreements", value: "finance"},
        {name:"Intimacy and Emotional Needs", value: "intimacy"},
        {name:"Trust and Betrayal", value: "trust"},
        {name:"Power Struggles", value: "power"},
        {name:"Jealousy and Insecurity", value: "jealousy"},
        {name:"Values and Beliefs", value: "values"},
        {name:"Family and In-Laws", value: "family"},
        {name:"Time Management", value: "time"},
        {name:"Career and Ambitions", value: "career"},
        {name:"Personal Habits and Lifestyle", value: "lifestyle"},
        {name:"Work-Life Balance", value: "balance"},
        {name:"Lack of Support", value: "support"},
        {name:"Parenting Styles", value: "parenting"}
    ]
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
                                    <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            {dateErrorMsg && <p className='text-red-600'>Please select a date.</p>}
                    </Form.Field>

                    <Form.Field name="effortRating" className='my-2'>
                        <Form.Label className='font-semibold text-center'> What is the main cause of conflict with your spouse?</Form.Label>
                        <Select
                            value={loveLanguageValue}
                            onValueChange={(value) => handleSelection(value)}
                            >
                            <SelectTrigger className="dark:border-white my-3">
                                <SelectValue className='text-gray-400'/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="">Select a Category</SelectItem>
                                {categoryNames.map(category => <SelectItem key={category.name} value={category.value}>{category.name}</SelectItem>) }
                            </SelectContent>
                        </Select>
                    </Form.Field>

                    <Form.Field name="effortRating" className='my-2 border-white'>
                        <Form.Label className='font-semibold text-center'>Remarks</Form.Label>
                        <Textarea className='mt-3' placeholder="Type your message here. (Optional)" />
                    </Form.Field>
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
