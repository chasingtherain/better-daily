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
    console.log("checkListData: ", checkListData)

    const handleCheck = (checkName) => {
        setCheckListData({...checkListData, [checkName]: !checkListData[checkName]})
        let checkListDataStr = JSON.stringify({...checkListData, [checkName]: !checkListData[checkName]})
        
        // update local storage
        localStorage.setItem(currentDate.toDateString(), checkListDataStr)
    }

    return (
        <div className="flex flex-col border-2 justify-center items-center mt-2 space-x-1">
            <div key={`c1`} className='flex justify-center items-center my-5'>
                <Checkbox.Root
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[4px] bg-white"
                    checked={checkListData.checkedOne}
                    onCheckedChange={() => handleCheck("checkedOne")}
                    id={`c1`}
                >
                    <Checkbox.Indicator>
                        <CheckIcon className='text-blue-500' />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className={`pl-[15px] text-[20px] leading-none dark:text-white ${checkListData.checkedOne ? "line-through" : ''}`}>
                    {checkListData.listOneTitle}
                </label>
            </div>
            <div key={`c2`} className='flex justify-center items-center my-5'>
                <Checkbox.Root
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[4px] bg-white"
                    checked={checkListData.checkedTwo}
                    onCheckedChange={() => handleCheck("checkedTwo")}
                    id={`c2`}
                >
                    <Checkbox.Indicator>
                        <CheckIcon className='text-blue-500' />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className={`pl-[15px] text-[20px] leading-none dark:text-white ${checkListData.checkedTwo ? "line-through" : ''}`}>
                    {checkListData.listTwoTitle}
                </label>
            </div>
            <div key={`c3`} className='flex justify-center items-center my-5'>
                <Checkbox.Root
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[4px] bg-white"
                    checked={checkListData.checkedThree}
                    onCheckedChange={() => handleCheck("checkedThree")}
                    id={`c3`}
                >
                    <Checkbox.Indicator>
                        <CheckIcon className='text-blue-500' />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className={`pl-[15px] text-[20px] leading-none dark:text-white ${checkListData.checkedThree ? "line-through" : ''}`}>
                    {checkListData.listThreeTitle}
                </label>
            </div>
        </div>
    )
};
