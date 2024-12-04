import React from 'react'

const Button = ({title, className}) => {
  return (
    <div>
      <button className={`bg-pink-500 hover:bg-white hover:text-black text-white py-1 px-5 text-xl rounded-full ${className} `}>
             {title}
      </button>
    </div>
  )
}

export default Button
