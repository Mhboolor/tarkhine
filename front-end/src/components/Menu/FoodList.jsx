import Title from "../common/Title/Title"
import Button from "../common/Button/Button"
import { PiShoppingCart } from 'react-icons/pi'
import MenuFoodCard from "./MenuFoodCard"

const FoodList = () => {
  return (
      <div className="flex flex-col gap-6 py-9 ">
          <div className="flex justify-between">
              <Title textSize="h6 md:text-h4 md:font-bold" title='غذاهای ایرانی'/>
              <Button text='تکمیل خرید' textColor='primary' textSize="caption-md md:text-body-md" icon={<PiShoppingCart className="text-body-md md:text-h4"/>} />
          </div>
          <div className="grid grid-cols-1 gap-2 md:gap-8 md:grid-cols-2">
              <MenuFoodCard />  
              <MenuFoodCard />
              <MenuFoodCard />
              <MenuFoodCard />
              <MenuFoodCard />
              <MenuFoodCard />
              <MenuFoodCard />
              <MenuFoodCard />
              <MenuFoodCard />
          </div>
    </div>
  )
}

export default FoodList