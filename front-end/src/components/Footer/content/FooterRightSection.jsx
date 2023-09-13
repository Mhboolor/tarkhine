import FooterIcons from './FooterIcons'
import { Link } from 'react-router-dom'

const FooterRightList = () => {
    return (
        <div className="footer-right  flex flex-col gap-2 md:gap-4">
            <h2 className='text-caption-md md:text-body-xl md:font-bold'>دسترسی آسان</h2>
            <ul className='flex flex-col gap-2 md:gap-4 text-caption-sm md:text-body-lg'>
                <Link to='/branch'><li className='hover:text-primary hover:scale-110 transition ease-in-out'>پرسش‌های متداول</li></Link>
                <Link to='/branch'><li className='hover:text-primary hover:scale-110 transition ease-in-out'>قوانین ترخینه</li></Link>
                <Link to='/branch'><li className='hover:text-primary hover:scale-110 transition ease-in-out'>حریم خصوصی</li></Link>
                <Link to='/branch'><li className='hover:text-primary hover:scale-110 transition ease-in-out'><FooterIcons /></li></Link>
            </ul>
        </div>
    )
}

export default FooterRightList