import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircle } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

const Chat = () => {
  return (
    <div>
      <div className='h-screen w-screen bg-purpleWhite flex flex-col gap-5 items-center p-7 '>
        <div className='w-full flex justify-between items-center'>
          <Link to={'/selectCharacter'} className='w-7 h-7 flex justify-center items-center'>
            <IoArrowBackCircle className='text-textBlue text-2xl' />
          </Link>
          <h1 className='w-full h-max text-center text-2xl font-bold text-textBlue'>Chat with Luna</h1>
          <IoArrowBackCircle className='text-lightWhite text-3xl' />
        </div>

        <div className='w-full h-screen flex flex-col justify-between'>
          <div className='w-full grid gap-4'>
            <div className='w-full flex justify-start'>
              <div className='w-max bg-white rounded-b-2xl rounded-r-2xl px-5 py-4 boxShadow'>
                <p>Hey Luna here!</p>
              </div>
            </div>
            <div className='w-full flex justify-end'>
              <div className='w-max bg-textBlue text-lightWhite rounded-b-2xl rounded-l-2xl px-5 py-4 boxShadow'>
                <p>Hey Luna</p>
              </div>
            </div>
          </div>

          <div className='flex gap-3'>
            <input className='w-full bg-lightWhite px-5 py-4 outline-none boxShadow rounded-xl ' type="text" placeholder='Type your message...' />
            <div className=' bg-textBlue rounded-xl flex justify-center items-center'>
              <LuSend className='text-lightWhite m-5 text-2xl'/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Chat
