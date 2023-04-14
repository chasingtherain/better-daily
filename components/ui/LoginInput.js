
export default function LoginInput({placeholder, type, onChangeEvent}) {
    return (
        <input
        className="box-border my-1 w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9"
        type=""
        placeholder={placeholder}
        onChange={onChangeEvent}
        />
    )
  }