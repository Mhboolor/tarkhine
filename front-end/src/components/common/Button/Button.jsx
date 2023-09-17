const Button = ({
  bgColor = "white",
  borderColor = "primary",
  textColor,
  text,
  px = 4,
  py = 2,
  textSize,
  width,
  icon
}) => {
  return (
    <button
      className={`
      relative
      left-0
      border
      ${icon && 'flex items-center gap-2'}
      bg-${bgColor} 
      py-${py}
      px-${px}
      border-${borderColor} 
      text-${textColor} 
      text-${textSize}
      rounded-4
      ${width}'
      text-center
      `}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
