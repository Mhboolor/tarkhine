
const CompleteRightBottom = () => {
    return (
        <div className="rounded-md border border-gray-4 w-full h-38 px-4 py-6">
            <div className="w-full h-full">
                <div className="flex gap-1 w-full justify-start text-gray-6 items-center">
                    <span className="text-body-sm md:text-body-md">توضیحات سفارش</span>
                    <span className="text-caption-sm md:text-caption-md">(اختیاری)</span>
                </div>
                <textarea placeholder="" className='placeholder:text-gray-1 h-full resize-none outline-none p-3 bg-transparent rounded-4 w-full'></textarea>
            </div>
        </div>
    )
}

export default CompleteRightBottom