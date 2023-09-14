import Title from "../common/Title/Title"
import Button from "../common/Button/Button"
import { PiShoppingCart } from 'react-icons/pi'
import MenuFoodCard from "./MenuFoodCard"

const FoodList = () => {
  return (
      <div className="flex flex-col gap-2 py-4 ">
          <div className="flex justify-between">
              <Title textSize="h6" title='غذاهای ایرانی' />
              <Button text='تکمیل خرید' textColor='primary' textSize="caption-md" icon={<PiShoppingCart className="text-body-md"/>} />
          </div>
          <div className="grid grid-cols-1 gap-2">
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