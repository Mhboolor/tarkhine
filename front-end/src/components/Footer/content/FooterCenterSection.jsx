import { Link } from "react-router-dom"

const FooterCenterList = () => {
    return (
        <div className="footer-center flex flex-col gap-2 md:gap-4">
            <h2 className='text-caption-md md:text-body-xl md:font-bold'>شعبه‌های ترخینه</h2>
            <ul className="flex flex-col gap-2 md:gap-4 text-caption-sm md:text-body-lg">
                <Link to='/branch' ><li className="hover:text-primary hover:scale-110 transition ease-in-out">شعبه اکباتان</li></Link>
                <Link to='/branch' ><li className="hover:text-primary hover:scale-110 transition ease-in-out">شعبه چالوس</li></Link>
                <Link to='/branch' ><li className="hover:text-primary hover:scale-110 transition ease-in-out">شعبه اقدسیه</li></Link>
                <Link to='/branch' ><li className="hover:text-primary hover:scale-110 transition ease-in-out">شعبه ونک</li></Link>
            </ul>
        </div>
    )
}

export default FooterCenterList