import React from 'react'

const Input = (props) => {
    return (
        <input
            className={`
            border-2 bg-transparent outline-none p-4
            border-${props.borderColor} 
            text-${props.textColor} 
            rounded-4
            w-[${props.width}] 
            h-[${props.height}]
            placeholder:text-${props.placeholderTextColor}
            `}

            type={props.type}
            placeholder={props.placeholder}
        />
    )
}

export default Input