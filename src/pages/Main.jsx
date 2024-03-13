import React from 'react'
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { ContextAuth } from '../context/Context';
import CircularProgressBar from "../components/CircularProgressBar"

const Main = () => {
  const { account } = ContextAuth()
  console.log(account);
  return (
    <div className='h-screen w-screen bg-purpleWhite flex flex-col gap-7 justify-between items-center px-5 pt-5 pb-9'>
      <div className='w-full grid gap-5'>
        <div className='w-full flex justify-between items-center'>
          <div>
            <h1 className='text-3xl font-bold text-textBlue'>Hi {account?.name},</h1>
            <p className='text-lg text-textGray'>Keep your way to learn</p>
          </div>
          <Link to={"/profile"}>
            <img className='w-11 h-11 rounded-full object-cover' src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1708616418~exp=1708620018~hmac=3b75c8218eacf33885cf4a1a37736fa8857b02bd0684d953fb3f410559cb711a&w=900" alt="" />
          </Link>
        </div>

        <div className='bg-textBlue relative flex items-end justify-center rounded-2xl p-5 mt-5 h-[130px]'>
          <img className='w-[50%]' src="/assets/boy.png" alt="" />
          <div className='w-[50%] flex flex-col'>
            <h1 className='text-2xl font-bold text-lightWhite'>Lets Learn <br /> More</h1>
            <p className='w-full text-lightWhite text-sm mt-1'>Get Started</p>
          </div>
        </div>

        <div className='w-full grid gap-5'>
          <h2 className='text-2xl font-medium'>Choose your level</h2>
          <div className='grid gap-4'>
            <Link to={'/selectStory'} className='bg-lightWhite p-5 rounded-3xl boxShadow flex justify-between items-center'>
              <div className='flex flex-col'>
                <h2 className='font-medium text-lg '>Easy level</h2>
                <div className='flex gap-2 items-center'>
                  <div className='w-2 h-2 bg-textBlue rounded-full'></div>
                  <p className='text-textGray'>Stories: <span className='text-textBlue'>20</span></p>
                </div>
              </div>
              <CircularProgressBar
                progress={40}
              />
            </Link>
            <Link to={'/selectStory'} className='bg-lightWhite p-5 rounded-3xl boxShadow flex justify-between items-center'>
              <div className='flex flex-col'>
                <h2 className='font-medium text-lg '>Medium level</h2>
                <div className='flex gap-2 items-center'>
                  <div className='w-2 h-2 bg-textBlue rounded-full'></div>
                  <p className='text-textGray'>Stories: <span className='text-textBlue'>20</span></p>
                </div>
              </div>
              <CircularProgressBar
                progress={40}
              />
            </Link>
            <Link to={'/selectStory'} className='bg-lightWhite p-5 rounded-3xl boxShadow flex justify-between items-center'>
              <div className='flex flex-col'>
                <h2 className='font-medium text-lg '>Hard level</h2>
                <div className='flex gap-2 items-center'>
                  <div className='w-2 h-2 bg-textBlue rounded-full'></div>
                  <p className='text-textGray'>Stories: <span className='text-textBlue'>20</span></p>
                </div>
              </div>
              <CircularProgressBar
                progress={40}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <Button to={"/uploadStory"} text={"Add your text file"} />
      </div>

    </div>
  )
}

export default Main
