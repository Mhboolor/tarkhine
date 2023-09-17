import Button from "../../common/Button/Button"

const CompleteLeft = () => {
    return (
        <>
            <div className="flex justify-between relative after:bg-gray-5 w-full after:absolute after:-bottom-5 after:w-full after:h-[1px]  ">
                <span className="text-body-md">سبد خرید</span>
                <span className="text-body-md">سطل</span>
            </div>
            <div className="max-h-[50rem] overflow-auto w-full">
            </div>
            <div className="w-full flex justify-between relative before:bg-gray-5 before:absolute before:-top-3 before:w-full before:h-[1px]">
                <span>تخفیف محصولات</span>
                <span>۶۳۰۰۰ تومان</span>
            </div>
            <div className="w-full flex justify-between relative before:bg-gray-5 before:absolute before:-top-3 before:w-full before:h-[1px]">
                <span>هزینه ارسال</span>
                <span>۰ تومان</span>
            </div>
            <div className="w-full flex justify-between relative before:bg-gray-5 before:absolute before:-top-3 before:w-full before:h-[1px]">
                <span>مبلغ قابل پرداخت</span>
                <span>۵۴۲,۰۰۰ تومان</span>
            </div>
            <Button text='ثبت سفارش' bgColor="primary" textColor='gray-1' width='full' />
        </>
    )
}

export default CompleteLeft