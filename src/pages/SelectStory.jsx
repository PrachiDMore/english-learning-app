import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const SelectStory = () => {
  return (
    <div className='h-screen w-screen bg-purpleWhite flex flex-col gap-5 items-center p-7 '>
      <div className='w-full flex justify-between items-center'>
        <Link to={'/main'} className=' flex justify-center items-center'>
          <IoArrowBackCircle className='text-textBlue text-4xl' />
        </Link>
        <h1 className='w-full h-max text-center text-2xl font-bold text-textBlue'>Select Story</h1>
        <IoArrowBackCircle className='text-lightWhite text-4xl' />
      </div>

      <div className='w-full h-max overflow-y-auto grid gap-5 pb-5'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default SelectStory
