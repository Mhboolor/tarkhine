import Button from "../../common/Button/Button"
import { BsTrash } from 'react-icons/bs'

const CompleteLeft = () => {
    return (
        <div className="w-full flex flex-col gap-5 text-body-sm px-6 py-6 rounded-md border border-gray-4 justify-between md:w-5/12 h-full">
            <div
                className="
                justify-between relative after:bg-gray-4 w-full hidden 
                md:flex
                after:absolute after:-bottom-3 after:w-full after:h-[1px]  ">
                <span className="text-body-md">سبد خرید (۵)</span>
                <BsTrash className="text-h4"/>
            </div>

            <div className="max-h-[50rem] overflow-auto w-full hidden md:flex flex-col gap-1">
                <span>محصولات</span>
                <span>محصولات</span>
                <span>محصولات</span>
                <span>محصولات</span>
                <span>محصولات</span>
                <span>محصولات</span>
                <span>محصولات</span>
                <span>محصولات</span>
            </div>

            <div className="w-full flex justify-between relative before:bg-gray-4 before:absolute before:hidden md:before:block before:-top-3 before:w-full before:h-[1px]">
                <span>تخفیف محصولات</span>
                <span className="text-gray-6">۶۳۰۰۰ تومان</span>
            </div>

            <div className="w-full flex justify-between relative before:bg-gray-4 before:absolute before:-top-2 before:w-full before:h-[1px]">
                <span>هزینه ارسال</span>
                <span>۰ تومان</span>
            </div>
            
            <div className="w-full flex justify-between relative before:bg-gray-4 before:absolute before:-top-2 before:w-full before:h-[1px]">
                <span>مبلغ قابل پرداخت</span>
                <span className="text-primary">۵۴۲,۰۰۰ تومان</span>
            </div>
            <Button text='ثبت سفارش' bgColor="primary" textColor='gray-1' width='full' />
        </div>
    )
}

export default CompleteLeft