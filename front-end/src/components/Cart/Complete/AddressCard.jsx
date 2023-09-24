import { BsTrash } from 'react-icons/bs';
import { FiEdit3 } from 'react-icons/fi'


const AddressCard = ({ name, addressTitle, address, phone}) => {
    return (
        <div className='border border-gray-4 rounded-8 p-4 flex flex-col gap-2 w-full bg-gray-1'>
            <div className='flex justify-between w-full items-start'>
                <span className='text-body-sm max-w-[70%] text-start'>{address}</span>
                <span className='flex gap-2 items-center text-h6 md:text-h5 text-gray-8'>
                    <BsTrash />
                    <FiEdit3 />
                </span>
            </div>
            <div className='text-caption-sm md:text-body-sm text-gray-5 flex justify-between'>
                <span>{addressTitle}</span>
                <span>{name}</span>
                <span>{phone}</span>
            </div>
        </div>
    )
}

export default AddressCard