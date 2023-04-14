import ActionButton from '@/components/ui/ActionButton'
import LoginInput from '@/components/ui/LoginInput'
import SocialButton from '@/components/ui/SocialButton'
import * as Form from '@radix-ui/react-form'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Login() {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [error, setError] = useState("")
    const [loginBtnLoading, setLoginBtnLoading] = useState("")


    const signInWithEmail = async () => {
        // setLoginBtnLoading("loading")
        // await signInWithEmailAndPassword(auth, userEmail, userPassword).then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     dispatch({type: "LOGIN", payload: user})
        //     navigate('/')
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     setError(errorCode)
        //   });
        //   setLoginBtnLoading("")
    } 
    
    return (
        <div className="flex flex-col w-full border-opacity-50">
            <p className='text-center my-2'>Login with: </p>
            <div className='flex justify-center items-center gap-2'>
                <SocialButton name="Google"/>
                <SocialButton name="Facebook"/>
                <SocialButton name="Apple"/>
            </div>
            <div className="text-center">OR</div>
            <div className="grid h-58 place-items-center">
                <Form.Root className="">
                        <Form.Field className="grid mb-[10px]" name="">
                        <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Email</Form.Label>
                        </div>
                        <Form.Control asChild>
                            <LoginInput placeholder="tucks@gmail.com" onChangeEvent={(event) => setUserEmail(event.target.value)}/>
                        </Form.Control>
                        </Form.Field>
                        <Form.Field className="grid mb-[10px]" name="">
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Password</Form.Label>
                        </div>
                        <Form.Control asChild>
                            <LoginInput placeholder="your password" onChangeEvent={(event) => setUserPassword(event.target.value)}/>
                        </Form.Control>
                        </Form.Field>
                        <Form.Submit asChild>
                            <span className="w-full inline-flex items-center justify-center">
                                <ActionButton name="LOGIN"/>
                            </span>
                        </Form.Submit>
                </Form.Root>
            </div>
            <div className="grid place-items-center my-2">
                <Link className="" href="/sign-up">Sign Up Instead</Link>
            </div>
        </div>
    )
}
  