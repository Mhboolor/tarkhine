const FooterCenterList = () => {
    return (
        <div className="footer-center flex flex-col gap-2 md:gap-4">
            <h2 className='text-caption-md md:text-body-xl md:font-bold'>شعبه‌های ترخینه</h2>
            <ul className="flex flex-col gap-2 md:gap-4 text-caption-sm md:text-body-lg">
                <li>شعبه اکباتان</li>
                <li>شعبه چالوس</li>
                <li>شعبه اقدسیه</li>
                <li>شعبه ونک</li>
            </ul>
        </div>
    )
}

export default FooterCenterList