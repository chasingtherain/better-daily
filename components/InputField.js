import React from 'react'
import * as Form from '@radix-ui/react-form';

function InputField({type}) {
  return (
    <Form.Control asChild>
        <input
        className="box-border my-2 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
        type="grateful"
        />
    </Form.Control>
  )
}

export default InputField