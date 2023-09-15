import { Outlet } from "react-router-dom"
import BreadCrumb from "../components/Cart/BreadCrumb"

function Cart() {
  return (
    <div className="flex flex-col items-center justify-center container m-auto px-5 sm:px-0 text-center">
        <BreadCrumb/>
        <Outlet/>
    </div>
  )
}

export default Cart