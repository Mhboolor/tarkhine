import smallCircle from '../../../assets/images/branches/smallCircle.png'
import largeCircle from '../../../assets/images/branches/largeCircle.png'
import icon from '../../../assets/images/branches/icon.png'
import Button from '../../common/Button/Button'
import { useState } from 'react'

const TarkhineBranchCard = ({ img, branchTitle, branchAddress }) => {
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    const handleMouseHover = () => {
        setIsHovered(true)
    }

    return (
        <section onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave} className="branch-card h-[80px] md:h-[360px] duration-500 flex w-full border-2 md:hover:shadow-lg transition-all ease-in-out rounded-8  border-primary md:flex-col md:gap-2">
            <div className="relative branch-card__img w-[40%] md:w-full md:h-[230px]">
                <div className={`absolute h-full w-full transition-all ease-in-out bg-black/40 ${isHovered ? 'opacity-100' : 'opacity-0 '}`}>
                    <div className='absolute top-20 right-32 cursor-pointer hover:scale-110 transition ease-out'>
                        <img src={largeCircle} className='' />
                        <img src={smallCircle} className='absolute top-2 right-2' />
                        <img src={icon} className='absolute top-3 right-[10px]' />
                    </div>
                </div>
                <img src={img} alt="" className="w-full h-full rounded-t-4 " />
            </div>
            <div className="branch-card__text md:pb-6 gap-4 flex items-center justify-center flex-col w-[60%] md:w-full">
                <div className='flex items-center justify-center flex-col'>
                    <h3 className="text-body-sm font-semibold md:text-body-xl">{branchTitle}</h3>
                    <p className="text-center text-caption-sm md:text-caption-lg mb-2">{branchAddress}</p>
                    <div className={` ${isHovered ? 'block' : 'hidden' }`}>
                        <Button text='صفحه شعبه   >  ' px={16} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TarkhineBranchCard