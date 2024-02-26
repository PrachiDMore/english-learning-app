import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircle } from "react-icons/io5";
import Button from '../components/Button';

const UploadStory = () => {
  const [page, setPage] = useState("upload");
  return (
    <div className='h-screen w-screen bg-purpleWhite flex flex-col gap-5 items-center p-7 '>
      <div className='w-full flex justify-between items-center'>
        <Link to={'/main'} className='flex justify-center items-center'>
          <IoArrowBackCircle className='text-textBlue text-4xl' />
        </Link>
        <h1 className='w-full h-max text-center text-2xl font-bold text-textBlue'>Upload Story</h1>
        <IoArrowBackCircle className='text-lightWhite text-4xl' />
      </div>

      <div className='w-full grid gap-4'>
        <div className='flex justify-between gap-3 px-[6px] py-[6px] bg-white rounded-full boxShadow'>
          <div onClick={() => setPage("upload")} className={page == 'upload' ? 'w-full bg-textBlue px-4 py-3 rounded-full flex justify-center text-white  duration-200' : 'w-full bg-white px-4 py-3 rounded-full flex justify-center text-textBlue duration-200'}>
            <p className='text-lightWhite'>Upload</p>
          </div>
          <div onClick={() => setPage("history")} className={page == 'history' ? 'w-full bg-textBlue px-4 py-3 rounded-full flex justify-center text-white duration-200' : 'w-full bg-white px-4 py-3 rounded-full flex justify-center text-textBlue duration-200'}>
            <p className=''>History</p>
          </div>
        </div>
        <h1 className='text-lg font-medium'>Upload your story or text </h1>
        <div className='flex gap-3'>
          <Button text={'Upload'} to={'/yourStory'} />
        </div>
      </div>
    </div>
  )
}

export default UploadStory
