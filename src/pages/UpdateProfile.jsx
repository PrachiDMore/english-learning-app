import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FaRegUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Input from '../components/Input';

const UpdateProfile = () => {
  return (
    <div className='h-screen w-screen bg-purpleWhite flex flex-col gap-20 items-center px-5 py-5'>
      <div className='w-full h-32 bg-textBlue rounded-2xl p-5 relative'>
        <div className='flex justify-between items-center'>
          <Link to={'/profile'} className=' flex justify-center items-center'>
            <IoArrowBackCircle className='text-lightWhite text-4xl' />
          </Link>
          <h1 className='w-full h-max text-center text-2xl font-bold text-lightWhite'>Update Profile</h1>
          <IoArrowBackCircle className='text-textBlue text-4xl' />
        </div>

        <div className='w-32 h-32 absolute top-16 left-1/2 -translate-x-1/2 profileShadow border border-white flex justify-center items-center rounded-full bg-white/20 backdrop-blur-md'>
          <img className='rounded-full w-24 h-24 object-cover ' src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1708616418~exp=1708620018~hmac=3b75c8218eacf33885cf4a1a37736fa8857b02bd0684d953fb3f410559cb711a&w=900" alt="" />
        </div>
      </div>

      <div className='w-full flex flex-col gap-8'>
        <div className='flex flex-col items-center'>
          <h1 className='font-medium text-xl'>Jhon Doe</h1>
          <p className='text-textGray'>jhondoe@gmail.com</p>
        </div>
        <div className='w-full flex flex-col gap-8'>
          <div className='w-full flex flex-col gap-5'>
            <Input icon={<FaRegUser className='text-textGray ' />} type={'text'} placeholder={'Name'} />
            <Input icon={<MdMailOutline className='text-textGray ' />} type={'text'} placeholder={'Email'} />
            <Input icon={<FaRegUser className='text-textGray ' />} type={'text'} placeholder={'Username'} />
          </div>
          <Button text={'Update'}/>
        </div>
      </div>

    </div>
  )
}

export default UpdateProfile
