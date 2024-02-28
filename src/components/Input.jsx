import React from 'react'


const Input = ({placeholder, type, icon, value, onChange}) => {
  return (
    <div className='w-full px-[18px] py-[15px] flex gap-[10px] items-center rounded-lg inputShadow border border-borderGray'>
      <div>{icon}</div>
      <input className='bg-purpleWhite outline-none ' type={type} placeholder={placeholder} onChange={onChange} value={value}/>
    </div>
  )
}

export default Input
