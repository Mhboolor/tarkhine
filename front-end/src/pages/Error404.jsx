import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen w-full relative overflow-hidden">
      <img
        src="../src/assets/images/error-404/error.png"
        alt="Error-404_image"
        className="w-96 h-96 z-10"
      />
      <img
        src="../src/assets/images/error-404/bibimbap.png"
        alt="motor_image"
        className="w-10 h-10 absolute top-12 right-20 hidden md:flex animate-[ping_1.8s_ease-in-out_infinite]"
      />
      <img
        src="../src/assets/images/error-404/burger.png"
        alt="motor_image"
        className="w-10 h-10 absolute top-32 left-72 hidden md:flex animate-[bounce_1s_ease-in-out_infinite]"
      />
      <img
        src="../src/assets/images/error-404/cutlery.png"
        alt="motor_image"
        className="w-10 h-10 absolute bottom-52 right-96 hidden md:flex animate-[bounce_1s_ease-in-out_infinite]"
      />
      <img
        src="../src/assets/images/error-404/dish.png"
        alt="motor_image"
        className="w-10 h-10 absolute top-36 right-1/3 hidden md:flex animate-[ping_1.8s_ease-in-out_infinite]"
      />
      <img
        src="../src/assets/images/error-404/pizza.png"
        alt="motor_image"
        className="w-10 h-10 absolute bottom-16 left-32 hidden md:flex animate-[spin_2s_ease-in-out_infinite]"
      />
      <div className="flex items-center justify-center gap-5 z-10">
        <img
          src="../src/assets/images/error-404/delivery-right.png"
          alt="motor_image"
          className="w-12 h-12 animate-move-right"
        />
        <p className="text-center text-2xl">صفحه موردنظر یافت نشد !</p>
        <img
          src="../src/assets/images/error-404/delivery-left.png"
          alt="motor_image"
          className="w-12 h-12 animate-move-left"
        />
      </div>
      <Link className="rounded-8 bg-success py-2 px-3 text-white" to={"/"}>
        صفحه اصلی
      </Link>
    </div>
  );
}

export default Error404;
