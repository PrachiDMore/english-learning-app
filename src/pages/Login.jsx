import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Button from '../components/Button';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='h-screen w-screen bg-purpleWhite flex flex-col gap-7 justify-start items-center px-7 py-10'>
      <div>
        <img className='h-44 w-44' src="/assets/login.svg" alt="" />
      </div>

      <div className='flex flex-col gap-1'>
        <h1 className='text-4xl text-center font-bold text-textBlue'>Login</h1>
        <p className='text-lg text-center text-textGray'>Welcome back!</p>
      </div>

      <div className='w-full grid gap-5'>
        <Input icon={<FaRegUser className='text-textGray ' />} type={"text"} placeholder={"Username"} />
        <div className='grid gap-2'>
          <Input icon={<MdLockOutline className='text-textGray  text-lg' />} type={"text"} placeholder={"Password"} />
          <p className='text-base w-full text-right text-grayishBlue'>Forgot password?</p>
        </div>
      </div>

      <div className='w-full '>
        <Button to={"/main"} text={"Login"}/>
      </div>

      <div className='w-full'>
        <p className='text-base w-full text-center text-grayishBlue'>Don't have an account? <Link to={"/createAccount"} className='text-textBlue'>Create Account</Link></p>
      </div>

    </div>
  )
}

export default Login
