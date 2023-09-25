function Menu({ menu }) {
  return (
    <div className="container m-auto my-12 flex flex-col items-center justify-center px-4">
      <h6 className="text-gray-8 mb-16 lg:mb-40 md:text-2xl">منوی رستوران</h6>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-20 lg:gap-6">
        {menu.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center flex-col border border-primary rounded-md w-36 h-20 lg:h-44 lg:w-72 relative"
          >
            <img
              src={item.image}
              alt="MenuImage"
              className="h-24 w-24 lg:h-auto lg:w-auto absolute top-[-50px] lg:top-[-120px]"
            />
            <a
              href="/"
              className="text-white bg-primary rounded-sm p-2 lg:px-4 text-xs lg:text-base absolute -bottom-5"
            >
              {item.button}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
