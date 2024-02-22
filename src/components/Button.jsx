import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, to}) => {
  return (
    <div className='w-full'>
      <Link to={to} className='w-full p-4 bg-textBlue text-purpleWhite font-medium text-lg rounded-2xl'>{text}</Link>
    </div>
  )
}

export default Button
