import React from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Profile = () => {
  return (
    <div className='h-screen w-screen bg-purpleWhite flex flex-col gap-7 justify-between items-center px-7 py-7'>
      <div className='w-full h-32 bg-textBlue rounded-2xl p-5 flex justify-between'>
        <IoIosArrowDropleftCircle className='text-lightWhite text-3xl' />
        <h1 className='w-full text-center text-2xl font-bold text-lightWhite'>Profile</h1>
        <IoIosArrowDropleftCircle className='text-lightWhite text-3xl' />
      </div>

    </div>
  )
}

export default Profile
