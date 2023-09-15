import Category from "../components/Menu/Category"
import BreadCrumb from "../components/Menu/BreadCrumb"
import SearchBox from "../components/common/searchBox/SearchBox"
import FoodList from "../components/Menu/FoodList"

const Menu = () => {
    return (
        <>
            <Category />
            <div className="flex flex-col gap-2 px-4 py-2 lg:px-14 w-full">
                <div className="flex items-center flex-col gap-2 md:flex-row w-full">
                    <div className="md:w-1/2 w-full"><BreadCrumb /></div>
                    <div className="w-full"><SearchBox /></div>
                </div>
                <FoodList />
            </div>
        </>
    )
}

export default Menu