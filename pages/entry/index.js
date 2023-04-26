import * as Form from '@radix-ui/react-form';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { useRouter } from 'next/router';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {formHeaderAndPlaceholders} from '../../data/form/formData'

export default function Entry(props){
    const { data: session } = useSession()
    const router = useRouter()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [disabled, setDisabled] = useState(true)
    const [formData, setFormData] = useState({
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
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        setDisabled(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
        let submittedData = {
            grateful: [formData.gratefulOne,formData.gratefulTwo,formData.gratefulThree],
            focus: [formData.focusOne,formData.focusTwo,formData.focusThree],
            wentWell: [formData.wentWellOne,formData.wentWellTwo,formData.wentWellThree],
            notWell: [formData.notWellOne,formData.notWellTwo,formData.notWellThree],
            improve: formData.improveOne,
            userEmail: session.user.email,
            selectedDate: selectedDate.toDateString()
        }
        
        let validInput = Boolean(submittedData.grateful.concat(submittedData.focus).join("").trim())
        if(!validInput){
            return console.log("invalid form input")
        }


        // link to api endpoint
        fetch(`/api/entry/post/`,{
            method: "POST",
            headers: {"Content-Type": "application/json"}, // Specify the content type as JSON
            body: JSON.stringify(submittedData), // Convert data object to JSON string
        })
        .then(response => {
          // handle response
            console.log("form submission successful")
            // inform user that form is submitted
            // redirect user to entry?
            console.log("response: ", response)
            if(response.ok){
                console.log("response is ok! redirect should happen")
                router.push('/entry/all')
            }
        })
        .catch(error => {
          // handle error
        });

    }

    return(
        <div className='h-screen px-[5%] md:px-[40%]'>
            <Form.Root>
                <Form.Field className="grid mb-[10px]">
                    <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white">Date</Form.Label>

                    <Popover className="">
                        <PopoverTrigger asChild>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal",
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
                    formHeaderAndPlaceholders.map((field,index) => 
                    (<Form.Field key={index} className="grid mb-[10px]" name={field.name}>
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white">{field.title}</Form.Label>
                        </div>
                        {
                            field.inputField.map((input,index)=>
                                <Form.Control asChild key={index}>
                                    <Input
                                    maxLength={50}
                                    className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                                    type={input.type}
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
                    className={`${disabled ? "opacity-25" : "opacity-100"} box-border bg-slate-100 w-full text-blue-700 dark:text-white shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none`}
                    disabled = {disabled} 
                    onClick={(e) => handleSubmit(e)}
                >
                    Submit Reflection
                </Button>
            </Form.Submit>
        </div>
    )
} 

export async function getServerSideProps(context){
    const session = await getServerSession(context.req, context.res, authOptions)
    console.log("session from gssp: ", session)
    if (!session) {
      return{
        redirect: {
          destination: '/api/auth/signin',
          permanent: false,
        }
      }
    }
  
    return {
      props: {
        session,
      },
    }
  }