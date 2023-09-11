import React from 'react'

const Button = (props) => {
    const {bgColor, borderColor, textColor, width, text} = props
  return (
      <button className={`
      border-2 bg-${bgColor} 
      outline-none 
      py-2
      px-4
      border-${borderColor} 
      text-${textColor} 
      rounded-4
      ${width} 
      `}>
          {text}
      </button>
  )
}

export default Button