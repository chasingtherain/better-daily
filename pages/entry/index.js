import * as Form from '@radix-ui/react-form';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
        <div className='h-screen'>
            <Form.Root>
                <Form.Field className="grid mb-[10px]" name="morningDate">
                    <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white">Date</Form.Label>
                    {/* <DatePicker
                        dateFormat="dd MMM yyyy"
                        selected={selectedDate}
                        onChange={(date) => setselectedDate(date)}
                    /> */}

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
                <Form.Field className="grid mb-[10px]" name="grateful">
                    <div className="flex items-baseline justify-between">
                        <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white">I am thankful for</Form.Label>
                    </div>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="grateful"
                        name="gratefulOne"
                        value={formData.gratefulOne}
                        placeholder='the lovely weather'
                        onChange={handleChange}
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="grateful"
                        name="gratefulTwo"
                        value={formData.gratefulTwo}
                        placeholder='optional'
                        onChange={handleChange}
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="grateful"
                        name="gratefulThree"
                        value={formData.gratefulThree}
                        placeholder='optional'
                        onChange={handleChange}
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field className="grid mb-[10px]" name="focus">
                    <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white">
                        My three key focus for the day
                    </Form.Label>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="focus"
                        name="focusOne"
                        value={formData.focusOne}
                        placeholder='finish task X'
                        onChange={handleChange}
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="focus"
                        name="focusTwo"
                        value={formData.focusTwo}
                        placeholder='optional'
                        onChange={handleChange}
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="focus"
                        name="focusThree"
                        value={formData.focusThree}
                        placeholder='optional'
                        onChange={handleChange}
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field className="grid mb-[10px]" name="wentWell">
                    <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white">
                        What went well yesterday?
                    </Form.Label>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="wentWell"
                        placeholder='finished task X'
                        name="wentWellOne"
                        value={formData.wentWellOne}
                        onChange={handleChange}
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="wentWell"
                        placeholder='optional'
                        name="wentWellTwo"
                        value={formData.wentWellTwo}
                        onChange={handleChange}
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="wentWell"
                        placeholder='optional'
                        name="wentWellThree"
                        value={formData.wentWellThree}
                        onChange={handleChange}
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field className="grid mb-[10px]" name="notWell">
                    <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white">
                        What did not go well yesterday?
                    </Form.Label>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="notWell"
                        placeholder='finished task X'
                        name="notWellOne"
                        value={formData.notWellOne}
                        onChange={handleChange}
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="notWell"
                        placeholder='optional'
                        name="notWellTwo"
                        value={formData.notWellTwo}
                        onChange={handleChange}
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="notWell"
                        placeholder='optional'
                        name="notWellThree"
                        value={formData.notWellThree}
                        onChange={handleChange}
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field className="grid mb-[10px]" name="improve">
                    <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white">
                        Reflecting on yesterday, what is one thing you wish to improve on
                    </Form.Label>
                    <Form.Control asChild>
                        <Input
                        maxlength="50"
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9 placeholder:text-gray-300 "
                        type="improve"
                        placeholder='spend lesser time on task Y'
                        name="improveOne"
                        value={formData.improveOne}
                        onChange={handleChange}
                        />
                    </Form.Control>
                </Form.Field>
            </Form.Root>
            
            <Form.Submit asChild>
                <Button
                    className={`${disabled ? "opacity-25" : "opacity-100"} box-border bg-slate-100 w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none`}
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