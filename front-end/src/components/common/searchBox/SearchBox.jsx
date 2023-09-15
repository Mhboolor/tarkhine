import { MdSearch } from "react-icons/md";

const SearchBox = ({
  px = 2,
  mdDisplay = 'flex',
  lgDisplay = 'flex'
}) => {
  return (
    <div className={`px-${px}`}>
      <div className={`container m-auto flex items-center justify-between border border-gray-4 rounded-4 text-caption-md leading-180 text-gray-8 md:${mdDisplay} lg:${lgDisplay}`}>
        <input
          type="text"
          placeholder="جستجو ..."
          className="w-full h-full flex-1 py-8 px-4 outline-none bg-transparent placeholder:text-gray-8"
        />
        <button className="p-2 text-body-lg">
          <MdSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
