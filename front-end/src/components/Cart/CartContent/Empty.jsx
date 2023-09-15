function Empty({ text }) {
  return (
    <div className="container m-auto flex flex-col items-center justify-center text-center gap-7 relative border rounded-4 py-36 px-5">
      <img
        src="../src/assets/images/cart/spider-tar.png"
        alt="Empty-Spider-Tar"
        className="absolute"
      />
      <div className="flex items-center justify-center flex-col gap-10 z-10">
        <p className="text-body-xl leading-180 text-gray-6">{text}</p>
        <button className="border border-primary text-primary text-button-lg font-medium rounded-4 bg-white py-2 px-10">
            منوی رستوران
        </button>
      </div>
    </div>
  );
}

export default Empty;
