function Title({ title, textSize = 'h4' }) {
  return (
    <div className={`flex items-center justify-center text-center font-bold text-${textSize} leading-140`}>{title}</div>
  );
}

export default Title;
