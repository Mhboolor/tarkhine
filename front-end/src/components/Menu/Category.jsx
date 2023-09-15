import { Link } from 'react-router-dom'

const Category = () => {
    const navLinks = [
        {
            id: 1,
            title: 'غذای اصلی',
            path: '/main-course'
        },
        {
            id: 2,
            title: 'پیش غذا',
            path: '/appetizers'
        },
        {
            id: 3,
            title: 'دسر',
            path: '/desserts'
        },
        {
            id: 4,
            title: 'نوشیدنی',
            path: '/drinks'
        },
    ]

    return (
        <nav className='w-full bg-gray-3 px-4 py-2 lg:pr-28'>
            <ul className='flex gap-4 md:gap-8 justify-start text-caption-md md:text-body-xl'>
                {
                    navLinks.map(link => (
                        <li key={link.id} className=''>
                            <Link
                                to='/branch'
                                className={`cursor-pointer hover:scale-105 hover:text-primary text-gray-6 transition ease-in-out
                                ${link.id === 1 ?
                                        'text-caption-lg text-primary md:text-h5 after:bg-primary after:w-full after:absolute relative after:-bottom-2 after:left-0 after:h-[2px]'
                                        : ''}
                                        `}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Category