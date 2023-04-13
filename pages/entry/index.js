import InputField from '@/components/InputField';
import * as Form from '@radix-ui/react-form';
import { useState } from 'react';

export default function Entry(){
    const [gratefulnessFieldCount] = useState(3)

    const gratefulnessField = []



    return(
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500'>
            <h1>Morning</h1>
            <Form.Root className="w-[260px]">
                <Form.Field className="grid mb-[10px]" name="grateful">
                    <div className="flex items-baseline justify-between">
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">I am thankful for</Form.Label>
                    </div>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="grateful"
                        placeholder='the lovely weather'
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="grateful"
                        placeholder='optional'
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="grateful"
                        placeholder='optional'
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field className="grid mb-[10px]" name="focus">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                        My three key focus for the day
                    </Form.Label>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="focus"
                        placeholder='finish task X'
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="focus"
                        placeholder='optional'
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="focus"
                        placeholder='optional'
                        />
                    </Form.Control>
                </Form.Field>
                <h1>Evening</h1>
                <Form.Field className="grid mb-[10px]" name="wentWell">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                        What went well today?
                    </Form.Label>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="wentWell"
                        placeholder='finished task X'
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="wentWell"
                        placeholder='optional'
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="wentWell"
                        placeholder='optional'
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field className="grid mb-[10px]" name="notWell">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                        What did not go as well today?
                    </Form.Label>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="notWell"
                        placeholder='finished task X'
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="notWell"
                        placeholder='optional'
                        />
                    </Form.Control>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="notWell"
                        placeholder='optional'
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field className="grid mb-[10px]" name="improve">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                        Name one thing you wish to improve on
                    </Form.Label>
                    <Form.Control asChild>
                        <input
                        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="improve"
                        placeholder='finished task X'
                        />
                    </Form.Control>
                </Form.Field>
                
                <Form.Submit asChild>
                <button className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                    Submit Reflection
                </button>
                </Form.Submit>
            </Form.Root>
        </div>
    )
} 