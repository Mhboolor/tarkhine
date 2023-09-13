const Button = ({
  bgColor = "white",
  borderColor = "primary",
  textColor,
  text,
  px = 4,
  py = 2,
  textSize,
  width
}) => {
  return (
    <button
      className={`
      relative
      left-0
      border
      bg-${bgColor} 
      py-${py}
      px-${px}
      border-${borderColor} 
      text-${textColor} 
      text-${textSize}
      rounded-4
      ${width}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
