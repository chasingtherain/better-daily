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

export default function Page() {
    const router = useRouter()
    const [loveLanguageValue, setLoveLanguageValue] = useState("")
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(true)
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
        console.log("confirm button clicked")
        // post to db 
        // if 200 resp, redirect to stats 
        // 
        router.push('/')
        // setButtonIsLoading(true)

        // setButtonIsLoading(false)
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
                                <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </Form.Field>

                    <Form.Field name="effortRating" className='my-2'>
                        <Form.Label className='font-semibold text-center'> Which love language have you expressed to your partner today?</Form.Label>
                        <Select
                            value={loveLanguageValue}
                            onValueChange={(value) => handleSelection(value)}
                            >
                            <SelectTrigger className="dark:border-white my-3">
                                <SelectValue className='text-gray-400'/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="">Select a Love Language</SelectItem>
                                <SelectItem value="service">Acts of Service</SelectItem>
                                <SelectItem value="gift">Gift</SelectItem>
                                <SelectItem value="touch">Physical Touch</SelectItem>
                                <SelectItem value="time">Quality Time</SelectItem>
                                <SelectItem value="words">Words of Affirmation</SelectItem>
                            </SelectContent>
                        </Select>
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
