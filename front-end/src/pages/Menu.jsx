import Category from "../components/Menu/Category"
import BreadCrumb from "../components/Menu/BreadCrumb"
import SearchBox from "../components/common/searchBox/SearchBox"

const Menu = () => {
    return (
        <>
            <Category />
            <div className="flex flex-col gap-2 px-4 py-2 lg:pr-28 w-full">
                <div className="flex flex-col gap-2 md:flex-row w-full">
                <div className="w-full"><BreadCrumb /></div>
                <div className="w-full"><SearchBox /></div>
                </div>
            </div>
        </>
    )
}

export default Menu