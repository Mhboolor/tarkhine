import BranchAddress from "./BranchAddress"
import CartSection from "../CartSection"
import ChooseDelivery from "./ChooseDelivery"
import Note from "./Note"
import { useSelector, useDispatch } from "react-redux"
import { completeActions } from "../../../app/completeSlice"
import UserAddress from "./UserAddress"

function Complete() {
  const isInPersonClicked = useSelector(state => state.complete.isInPersonClicked);
  const dispatch = useDispatch()
  const deliveryChangeHandler = () => {
    dispatch(completeActions.inPersonClickHandler())
  }
  return (
    <div className="flex gap-4 w-full flex-col md:flex-row">
      <div className="w-full flex flex-col gap-8">
        <ChooseDelivery deliveryChangeHandler= {deliveryChangeHandler} />
        {isInPersonClicked ? <UserAddress /> : <BranchAddress />}
        <Note />
      </div>
      <CartSection />
    </div>
  )
}

export default Complete