import { AiOutlineHeart } from 'react-icons/ai'
import { IoStarOutline } from 'react-icons/io5'
import Button from '../common/Button/Button'

const MenuFoodCard = () => {
    return (
        <div className="flex border border-gray-4 rounded-8 justify-between hover:shadow-md transition ease-linear">
            <div className='w-1/3 bg-[url("../src/assets/images/menu/salad.jpg")] rounded-r-8 bg-cover bg-center bg-no-repeat'>
            </div>
            <div className="flex flex-col gap-2 p-2 md:px-4 w-2/3">
                <div className="flex justify-between items-center w-full">
                    <span className='text-caption-md md:text-h7 font-medium'>کوفته برنجی</span>
                    <div className='flex gap-2 items-center'>
                        <span className="line-through text-gray-5 text-caption-sm md:text-body-md">۱۸۰۰۰۰</span>
                        <span
                            className="bg-error-light flex items-center justify-center bg-opacity-20 md:text-caption-md text-error w-max text-caption-sm px-1 rounded-8">
                            %۲۰
                        </span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <span className='overflow-hidden text-caption-sm md:text-body-sm text-ellipsis whitespace-nowrap w-2/3'>یبسیسیببرنج سبزی کوفته لپع کوفت زهرمار</span>
                    <span className='text-caption-sm md:text-body-lg'>۱۴۵,۰۰۰ تومان</span>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-1'>
                        <AiOutlineHeart className='md:text-h4' />
                        <div className='flex md:text-h4'>
                            <IoStarOutline />
                            <IoStarOutline />
                            <IoStarOutline />
                            <IoStarOutline />
                        </div>
                    </div>
                    <Button text='افزودن به سبد خرید' textSize='caption-sm md:text-body-md' textColor='gray-1' bgColor='primary' px={2} />
                </div>
            </div>
        </div>
    )
}

export default MenuFoodCard