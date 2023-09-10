function Home() {
  const menuObj = [
    {
      id: 1,
      title: "نوشیدنی",
      src: "../src/assets/images/menuItem/image.png",
    },
    {
      id: 2,
      title: "دسر",
      src: "../src/assets/images/menuItem/image-1.png",
    },
    {
      id: 3,
      title: "پیش غذا",
      src: "../src/assets/images/menuItem/image-2.png",
    },
    {
      id: 4,
      title: "غذای اصلی",
      src: "../src/assets/images/menuItem/image-3.png",
    },
  ];
  return (
    <div className="container">
      {/* menu item list */}
      <div className="menuItem">
        <h1>منوی رستوران</h1>
        <div className="text-black-7 leading-180 flex flex-col items-start text-caption-lg divide-y px-4 lg:flex-row lg:items-center lg:justify-center lg:text-body-lg lg:gap-6 lg:px-0 lg:divide-none">
          {menuObj.map((items) => (
            <div className="w-full relative lg:w-auto group" key={items.id}>
              <img src={items.src}></img>
              <div>
                <p>{items.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* tarkhine resturant */}
      <div className="about-tarkhine"></div>
    </div>
  );
}

export default Home;
