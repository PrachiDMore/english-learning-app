import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='h-screen w-screen bg-purpleWhite flex flex-col gap-7 justify-between items-center px-7 py-7'>
      <div className='w-full h-32 bg-textBlue rounded-2xl p-5 relative'>
        <div className='flex justify-between items-center'>
          <Link to={'/main'} className='w-7 h-7 flex justify-center items-center'>
            <IoArrowBackCircle className='text-lightWhite text-2xl' />
          </Link>
          <h1 className='w-full h-max text-center text-2xl font-bold text-lightWhite'>Profile</h1>
          <IoArrowBackCircle className='text-textBlue text-3xl' />
        </div>

        <div className='w-32 h-32 absolute top-16 left-[33%] profileShadow border border-white flex justify-center items-center rounded-full bg-white/40'>
          <img className='rounded-full w-24 h-24 object-cover ' src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1708616418~exp=1708620018~hmac=3b75c8218eacf33885cf4a1a37736fa8857b02bd0684d953fb3f410559cb711a&w=900" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Profile
