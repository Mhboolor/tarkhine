import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import AddressCard from './AddressCard'



const CompleteRightCenter = () => {
    const userAddress = [
        {
            id: 1,
            name: 'ممد تقی',
            addressTitle: 'محل کار',
            address: 'تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰',
            phone: '0914222666'
        },
        {
            id: 2,
            name: 'ممد قلی',
            addressTitle: 'محل کار',
            address: 'تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰',
            phone: '0254896215'
        },
        {
            id: 3,
            name: 'ممد سالار',
            addressTitle: 'محل کار',
            address: 'تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰',
            phone: '0858558585'
        },
        {
            id: 4,
            name: 'ممد سلطان',
            addressTitle: 'محل کار',
            address: 'تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰',
            phone: '0757757575'
        }
    ]
    return (
        <div className="rounded-md border border-gray-4 gap-5 md:px-6 md:py-7 px-4 py-6 flex flex-col w-full">
            <div className="flex justify-between relative after:bg-gray-4 w-full after:absolute after:-bottom-5 md:after:-bottom-3 after:w-full after:h-[1px]">
                <span className="flex items-center gap-1">
                    <HiOutlineLocationMarker className='text-body-md md:text-h4' />
                    <span className="text-body-sm md:text-body-md">آدرس ها</span>
                </span>
                <span className='text-primary flex items-center gap-1'>
                    <AiOutlinePlusCircle className='md:text-h6' />
                    <span className='text-caption-md'>افزودن آدرس</span>
                </span>
            </div>
            {userAddress.length > 0 ?
                <div className='grid grid-cols-1 md:grid-cols-2 w-full pt-4 md:pt-6 gap-2 md:gap-4'>
                    {userAddress.map(item => (
                        <AddressCard {...item} />
                    ))}
                </div> :
                <div className="flex justify-center items-center h-48 w-full p-4 relative">
                    <img src="../src/assets/images/cart/spider-tar.png" className="w-max h-full opacity-70" alt="" srcset="" />
                    <span className="w-full h-full absolute top-[50%] text-body-sm text-gray-6">شما در حال حاضر هیچ آدرسی ثبت نکرده اید!</span>
                </div>
            }
        </div>
    )
}

export default CompleteRightCenter