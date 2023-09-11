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
import { yearData } from '@/data/date/yearData';


export default function Page() {
    const d = new Date()
    const router = useRouter()
    const { data: session, status } = useSession()
    const [loveLanguageValue, setLoveLanguageValue] = useState("")
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(true)
    const [dateErrorMsg, setDateErrorMsg] = useState(false)
    const [buttonIsLoading, setButtonIsLoading] = useState (false)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const defaultFormState = {
        misogiOne: '',
        adventureOne: '',
        adventureTwo: '',
        adventureThree: '',
        adventureFour: '',
        adventureFive: '',
        adventureSix: '',
        year: d.getFullYear().toString()
    }
    const [formData, setFormData] = useState(defaultFormState);
    
    const handleSelection = (e) => {
        setFormData({...formData, ["year"]: e})
        console.log(e)
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        setDisableSubmitBtn(false)
        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setButtonIsLoading(true)

        const submittedData = {
            misogi: formData.misogiOne,
            adventure: [
                formData.adventureOne,
                formData.adventureTwo,
                formData.adventureThree,
                formData.adventureFour,
                formData.adventureFive,
                formData.adventureSix
            ],
            userEmail: session!.user!.email,
            year: formData.year
        }

        // link to api endpoint
        fetch(`/api/life-experiences/post/`,{
            method: "POST",
            headers: {"Content-Type": "application/json"}, // Specify the content type as JSON
            body: JSON.stringify(submittedData), // Convert data object to JSON string
        })
        .then(response => {
          // handle response
            // console.log("response: ", response)
            if(response.ok){
                // remove item to ensure that focus list will be updated and refetched by useEffect in '/'
                console.log("life experience post successful")
                router.push('/')
            }
        })
        .catch(error => {
          // handle error
        });
    }

    return (
        <div className='h-screen px-[5%] mt-8 md:mt-[5%] md:px-[30%]'>
                <Form.Root>
                <Form.Field name="date" className="grid mb-[10px]">
                        <Form.Label className="text-[16px] font-semibold leading-[35px]">Year</Form.Label>
                        <Select
                            value={formData["year"].toString() || d.getFullYear().toString()}
                            onValueChange={handleSelection}
                            >
                            <SelectTrigger className="dark:border-white my-3">
                                <SelectValue className='text-gray-400'/>
                            </SelectTrigger>
                            <SelectContent>
                                {yearData.map((year) =><SelectItem key={year} value={year.toString()}>{year}</SelectItem>)}
                            </SelectContent>
                        </Select>
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
                                        value={formData[input.name]}
                                        placeholder={input.placeholder}
                                        onChange={handleChange}
                                        />
                                    </Form.Control>)
                            }
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
                        {buttonIsLoading ? "Updating..." : "Submit"}
                    </Button>
                </Form.Submit>
                <Link 
                    className='text-center'
                    href='/relationship/dashboard'>
                        <p className='underline'>View Life Experiences</p>
                </Link>
        </div>
    )
};
