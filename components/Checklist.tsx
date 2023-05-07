import { currentDate } from '@/utils/date';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

export default function Checklist({list}) {

    const defaultListState = {
        listOneTitle: list[0],
        listTwoTitle: list[1],
        listThreeTitle: list[2],
        checkedOne: false,
        checkedTwo: false,
        checkedThree: false,
    }
    const [checkListData, setCheckListData] = useState(defaultListState)

    useEffect(() => {
        const stored = localStorage.getItem(currentDate.toDateString());

        setCheckListData(stored ? JSON.parse(stored) : defaultListState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCheck = (checkName) => {
        setCheckListData({...checkListData, [checkName]: !checkListData[checkName]})
        let checkListDataStr = JSON.stringify({...checkListData, [checkName]: !checkListData[checkName]})
        
        // update local storage
        localStorage.setItem(currentDate.toDateString(), checkListDataStr)
    }

    return (
        <>
            <p className="text-xl md:text-2xl leading-normal font-serif tracking-normal text-center mb-3">Today I Aim to Complete:</p>
            <div className="border-2 border-black px-5 mx-10 rounded-md md:mx-30 md:px-20">
                {
                    checkListData?.listOneTitle && <div key={`c1`} className='flex my-5 items-center'>
                        <Checkbox.Root
                            className="flex border-2 border-slate-600 h-[20px] w-[20px] md:h-[30px] md:w-[30px] items-center justify-center rounded-[4px] bg-white"
                            checked={checkListData?.checkedOne}
                            onCheckedChange={() => handleCheck("checkedOne")}
                            id={`c1`}
                        >
                            <Checkbox.Indicator>
                                <CheckIcon className='text-blue-500 mx-2' />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label className={`pl-[5px] md:pl-[15px] text-[14px] text-left md:text-[20px] leading-none dark:text-white ${checkListData?.checkedOne ? "line-through" : ''}`}>
                            {checkListData?.listOneTitle}
                        </label>
                    </div>
                }
                {
                    checkListData?.listTwoTitle && <div key={`c2`} className='flex my-5 items-center'>
                        <Checkbox.Root
                            className="flex border-2 border-slate-600 h-[20px] w-[20px] md:h-[30px] md:w-[30px] items-center justify-center rounded-[4px] bg-white"
                            checked={checkListData?.checkedTwo}
                            onCheckedChange={() => handleCheck("checkedTwo")}
                            id={`c2`}
                        >
                            <Checkbox.Indicator>
                                <CheckIcon className='text-blue-500 mx-2' />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label className={`pl-[5px] md:pl-[15px] text-[14px] text-left md:text-[20px] leading-none dark:text-white ${checkListData?.checkedTwo ? "line-through" : ''}`}>
                            {checkListData?.listTwoTitle}
                        </label>
                    </div>
                }
                {                
                checkListData?.listThreeTitle && <div key={`c3`} className='flex my-5 items-center'>
                        <Checkbox.Root
                            className="flex border-2 border-slate-600 h-[20px] w-[20px] md:h-[30px] md:w-[30px] items-center justify-center rounded-[4px] bg-white"
                            checked={checkListData?.checkedThree}
                            onCheckedChange={() => handleCheck("checkedThree")}
                            id={`c3`}
                        >
                            <Checkbox.Indicator>
                                <CheckIcon className='text-blue-500 mx-1' />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label className={`pl-[5px] md:pl-[15px] text-[14px] text-left md:text-[20px] leading-none dark:text-white ${checkListData?.checkedThree ? "line-through" : ''}`}>
                            {checkListData?.listThreeTitle}
                        </label>
                    </div>
                }

            </div>
        </>
    )
};
