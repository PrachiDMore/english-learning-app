import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

const CreateAccount = () => {
  return (
    <div className='h-screen w-screen bg-purpleWhite flex flex-col gap-7 justify-start items-center px-7 py-10'>
      <div>
        <img className='h-44 w-44' src="/assets/login.svg" alt="" />
      </div>

      <div className='flex flex-col gap-1'>
        <h1 className='text-4xl text-center font-bold text-textBlue'>Create Account</h1>
        <p className='text-lg text-center text-textGray'>Welcome!</p>
      </div>

      <div className='w-full grid gap-5'>
        <Input icon={<MdMailOutline className='text-textGray ' />} type={"email"} placeholder={"Email"} />
        <Input icon={<FaRegUser className='text-textGray ' />} type={"text"} placeholder={"Username"} />
        <Input icon={<MdLockOutline className='text-textGray  text-lg' />} type={"text"} placeholder={"Password"} />
        <Input icon={<MdLockOutline className='text-textGray  text-lg' />} type={"text"} placeholder={"Confirm password"} />
      </div>

      <div className='w-full'>
        <Button to={'/main'} text={"Create Account"}/>
      </div>

      <div className='w-full'>
        <p className='text-base w-full text-center text-grayishBlue'>Already have an account? <Link to={"/login"} className='text-textBlue'>Login</Link></p>
      </div>

    </div>
  )
}

export default CreateAccount
