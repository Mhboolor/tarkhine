const Button = ({
  bgColor = "white",
  borderColor = "primary",
  textColor,
  width,
  text,
  px = 4,
  py = 2,
  textSize
}) => {
  return (
    <button
      className={`
      relative
      left-0
      border
      bg-${bgColor} 
      outline-none 
      ${py}
      ${px}
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
