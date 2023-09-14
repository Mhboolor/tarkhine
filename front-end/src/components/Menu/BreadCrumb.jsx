import {MdArrowBackIosNew} from 'react-icons/md'


const BreadCrumb = () => {
    const breacCrumbItems = [
        {
            id: 1,
            title: 'غذاهای ایرانی'
        },
        {
            id: 2,
            title: 'غذاهای غیر ایرانی'
        },
        {
            id: 3,
            title: 'پیتزاها'
        },
        {
            id: 4,
            title: 'ساندویچ ها'
        },
    ]
  return (
      <div className='flex gap-2'>
          {breacCrumbItems.map(breadCrumb => (
              <div key={breadCrumb.id} className="px-2 py-1 bg-gray-3 text-caption-sm md:text-body-md flex gap-1 items-center rounded-md">
                  <span>{breadCrumb.title}</span>
                  <span><MdArrowBackIosNew /></span>
              </div>
          ))}
    </div>
  )
}

export default BreadCrumb