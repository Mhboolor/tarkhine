function HeroBanner({ image, text }) {
  return (
    <div
      className="relative flex items-center justify-center bg-center bg-no-repeat bg-cover w-full h-44 md:h-[21rem] before:contents-[''] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black before:opacity-60"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2 className="text-tint-1 text-center text-base md:text-[2.5rem] z-20">
        {text}
      </h2>
    </div>
  );
}

export default HeroBanner;
