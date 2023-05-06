import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function Checklist({list}) {
    // pass in today's focus content
    let [checkedOne, setCheckOne] = useState(false)
    // console.log("checkedOne: ",checkedOne)

    const handleChange = (e) => {
        // console.log(e)
        setCheckOne(e)
    }

    return (
        <div className="flex flex-col border-2 justify-center items-center mt-2 space-x-1">
            {
                list.map((record, index)=> {
                    return <div key={`c${index}`} className='flex justify-center items-center my-5'>
                        <Checkbox.Root
                            className="flex h-[30px] w-[30px] items-center justify-center rounded-[4px] bg-white"
                            checked={checkedOne}
                            // value={checkedOne}
                            onCheckedChange={handleChange}
                            id={`c${index}`}
                        >
                            <Checkbox.Indicator>
                                <CheckIcon className='text-blue-500' />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label className={`pl-[15px] text-[20px] leading-none dark:text-white ${checkedOne ? 'line-through' : ""}`} htmlFor={`c${index}`}>
                            {record}
                        </label>
                    </div>
                })
            }
        </div>
    )
};
