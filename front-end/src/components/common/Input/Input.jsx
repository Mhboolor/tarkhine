import React from 'react'

const Input = (props) => {
    const {
        borderColor,
        textColor, width,
        height,
        placeholderTextColor,
        type,
        placeholder
    } = props
    console.log(placeholderTextColor);
    
    return (
        <input
            className={`
            border-2
            bg-transparent 
            outline-none
            py-2
            px-4
            border-${borderColor} 
            text-${textColor} 
            rounded-4
            w-[${width}] 
            h-[${height}]
            placeholder:${placeholderTextColor}
            `}

            type={type}
            placeholder={placeholder}
        />
    )
}

export default Input