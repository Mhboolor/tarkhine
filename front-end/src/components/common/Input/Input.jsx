const Input = ({
    border = "border",
  borderColor,
  textColor,
  width,
  height,
  placeholderTextColor,
  type,
  placeholder,
}) => {

  return (
    <input
      className={`
            ${border}
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
  );
};

export default Input;
