"use client"
import * as Form from '@radix-ui/react-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 as Loader } from "lucide-react"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Input } from '@/components/ui/input';
import { lifeExperienceFormHeaders } from '@/data/form/lifeExperienceData';
import { yearData } from '@/data/date/yearData';
import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher';


export default function Page() {
    const d = new Date()
    const { data: session, status } = useSession()
    const { data:entries, error, isLoading } = useSWR(`/api/life-experiences/get/all?params=${session?.user?.email}`, fetcher)
    const [selectedYear, setSelectedYear] = useState(2023)
    const router = useRouter()
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(true)
    const [buttonIsLoading, setButtonIsLoading] = useState (false)
    const defaultFormState = {
        misogiOne: '',
        adventureOne: '',
        adventureTwo: '',
        adventureThree: '',
        adventureFour: '',
        adventureFive: '',
        adventureSix: ''
    }
    const [formData, setFormData] = useState(defaultFormState);
    const yearOfEntry = entries?.allLifeExperienceEntries?.filter(entry => entry.year == selectedYear)[0]
    console.log("yearOfEntry: ", yearOfEntry)
    console.log("entries: ", entries)
    console.log("yearOfEntry: ", yearOfEntry)
    useEffect(() => {
        if(!isLoading && yearOfEntry){
            setFormData({
                misogiOne: yearOfEntry.misogiContent,
                adventureOne: yearOfEntry.adventureContent[0],
                adventureTwo: yearOfEntry.adventureContent[1],
                adventureThree: yearOfEntry.adventureContent[2],
                adventureFour: yearOfEntry.adventureContent[3],
                adventureFive: yearOfEntry.adventureContent[4],
                adventureSix: yearOfEntry.adventureContent[5]
            })
        }
        else if(!yearOfEntry){
            setFormData(defaultFormState)
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[isLoading, yearOfEntry])
    
    const handleSelection = (e) => {
        // setFormData({...formData, ["year"]: e})
        setSelectedYear(e)
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
            misogiContent: formData.misogiOne,
            adventureContent: [
                formData.adventureOne,
                formData.adventureTwo,
                formData.adventureThree,
                formData.adventureFour,
                formData.adventureFive,
                formData.adventureSix
            ],
            userEmail: session!.user!.email,
            year: selectedYear
        }
        console.log("submittedData: ", submittedData)
        console.log("submitting form to server..")

        // link to api endpoint
        fetch(`/api/life-experiences/post`,{
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
                router.push('/life-experiences/all')
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
                            value={selectedYear.toString() || d.getFullYear().toString()}
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
                    href='/life-experiences/all'>
                        <p className='underline'>View Life Experiences</p>
                </Link>
        </div>
    )
};
