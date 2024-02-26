import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, to, className}) => {
  return (
    <div className='w-full flex '>
      <Link to={to} className={'w-full text-center p-4 bg-textBlue text-purpleWhite font-medium rounded-2xl ' + className}>{text}</Link>
    </div>
  )
}

export default Button
