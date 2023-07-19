"use client"

import { useState } from 'react';

export default function Page() {

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
        // post to db 
        // if 200 resp, redirect to stats 
        // 

        // setButtonIsLoading(true)

        // setButtonIsLoading(false)
    }

    return (
        <div className='h-screen px-[5%] mt-8 md:mt-[5%] md:px-[30%]'>
            dashboard
        </div>
    )
};
