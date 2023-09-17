
const CompleteRightCenter = () => {
    return (
        <div className="rounded-md border border-gray-4 gap-5 px-10 py-5 flex flex-col w-full">
            <div className="flex justify-between relative after:bg-gray-5 w-full after:absolute after:-bottom-5 after:w-full after:h-[1px]">
                <span>آدرس ها</span>
                <span>افزودن آدرس</span>
            </div>
            <div className="flex justify-center items-center h-48 w-full p-4 relative">
                <img src="../src/assets/images/cart/spider-tar.png" className="w-max h-full opacity-70" alt="" srcset="" />
                <span className="w-full h-full absolute top-[50%] text-body-sm text-gray-6">شما در حال حاضر هیچ آدرسی ثبت نکرده اید!</span>
            </div>
        </div>
    )
}

export default CompleteRightCenter