import * as Form from '@radix-ui/react-form';
import * as Tabs from '@radix-ui/react-tabs';

export default function Entry(){

    return(
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500 h-screen'>
              <Tabs.Root 
                defaultValue="morning"
                className='flex flex-col shadow-blackA4' 
                >
                <Tabs.List 
                    aria-label="tabs"
                    className='flex'>
                    <Tabs.Trigger 
                        value="morning"
                        className='px-5 flex-1 flex items-center justify-center text-[15px] leading-none text-slate-100 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current'
                    >
                        Morning
                    </Tabs.Trigger>
                    <Tabs.Trigger 
                        value="evening"
                        className='px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-slate-100 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current'>
                        Evening
                    </Tabs.Trigger>

                </Tabs.List>
                <Tabs.Content 
                    value="morning"
                    className="grow p-5 rounded-b-md outline-none"
                >
                    <Form.Root className="">
                        <Form.Field className="grid mb-[10px]" name="grateful">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">I am thankful for</Form.Label>
                            </div>
                            <Form.Control asChild>
                                <input
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
                                type="grateful"
                                placeholder='the lovely weather'
                                />
                            </Form.Control>
                            <Form.Control asChild>
                                <input
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
                                type="grateful"
                                placeholder='optional'
                                />
                            </Form.Control>
                            <Form.Control asChild>
                                <input
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
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
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
                                type="focus"
                                placeholder='finish task X'
                                />
                            </Form.Control>
                            <Form.Control asChild>
                                <input
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
                                type="focus"
                                placeholder='optional'
                                />
                            </Form.Control>
                            <Form.Control asChild>
                                <input
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
                                type="focus"
                                placeholder='optional'
                                />
                            </Form.Control>
                        </Form.Field>
                    </Form.Root>
                    <Form.Submit asChild>
                        <button className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none">
                            Submit Reflection
                        </button>
                    </Form.Submit>
                </Tabs.Content>
                <Tabs.Content 
                    value="evening"
                    className="grow p-5 rounded-b-md outline-none"
                >
                    <Form.Root>
                        <Form.Field className="grid mb-[10px]" name="wentWell">
                            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                                What went well today?
                            </Form.Label>
                            <Form.Control asChild>
                                <input
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
                                type="wentWell"
                                placeholder='finished task X'
                                />
                            </Form.Control>
                            <Form.Control asChild>
                                <input
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
                                type="wentWell"
                                placeholder='optional'
                                />
                            </Form.Control>
                            <Form.Control asChild>
                                <input
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
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
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
                                type="notWell"
                                placeholder='finished task X'
                                />
                            </Form.Control>
                            <Form.Control asChild>
                                <input
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
                                type="notWell"
                                placeholder='optional'
                                />
                            </Form.Control>
                            <Form.Control asChild>
                                <input
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
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
                                className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
                                type="improve"
                                placeholder='spend lesser time on task Y'
                                />
                            </Form.Control>
                        </Form.Field>
                        
                        <Form.Submit asChild>
                        <button className="box-border bg-slate-100 w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none">
                            Submit Reflection
                        </button>
                        </Form.Submit>
                    </Form.Root>
                </Tabs.Content>

            </Tabs.Root>
        </div>
    )
} 