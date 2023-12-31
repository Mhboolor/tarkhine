import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'

const FooterLeftSection = () => {
    return (
        <section className='footer-left-container flex-col gap-4 relative hidden lg:flex'>
            <h5 className='flex text-h5 font-bold'>پیام به ترخینه</h5>
            <div className='flex gap-6'>
                {/* right section */}
                <div className='flex flex-col gap-3 items-center'>
                    <Input borderColor='gray-7' width='276px' height='40px' placeholderTextColor='text-gray-1' textColor='gray-1' type='text' placeholder='نام و نام خانوادگی' />
                    <Input borderColor='gray-7' width='276px' height='40px' placeholderTextColor='text-gray-1' textColor='gray-1' type='text' placeholder='شماره تماس' />
                    <Input borderColor='gray-7' width='276px' height='40px' placeholderTextColor='text-gray-1' textColor='gray-1' type='email' placeholder='آدرس ایمیل' />
                </div>
                {/* left section */}
                <div>
                    <textarea id="footer_texarea" placeholder='پیام شما' className='placeholder:text-gray-1 h-full resize-none outline-none p-3 bg-transparent border-gray-7 border-2 rounded-4 w-[276px]'></textarea>
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <Button width='w-[140px]' bgColor='transparent' borderColor='gray-7' textColor='gray-1' text='ارسال پیام' />
            </div>
        </section>
    )
}

export default FooterLeftSection