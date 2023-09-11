import React from 'react'
import Input from '../../common/Input/Input'

const FooterLeftSection = () => {
    return (
        <section className='footer-left-container flex flex-col gap-4'>
            <h5>پیام به ترخینه</h5>
            <div className='flex gap-6'>
                {/* right section */}
                <div className='flex flex-col gap-3 items-center'>
                    <Input borderColor={'gray-7'} width='276px' height='40px' placeholderTextColor='gray-1' textColor='gray-1' type='text' placeholder='نام و نام خانوادگی' />
                    <Input borderColor={'gray-7'} width='276px' height='140px' placeholderTextColor='gray-1' textColor='gray-1' type='text' placeholder='شماره تماس' />
                    <Input borderColor={'gray-7'} width='276px' height='40px' placeholderTextColor='gray-1' textColor='gray-1' type='email' placeholder='آدرس ایمیل' />
                </div>
                {/* left section */}
                <div>
                <Input borderColor={'gray-7'} width='276px' height='144px' placeholderTextColor='gray-1' textColor='gray-1' placeholder='پیام شما' type='textarea' />
                </div>
            </div>
        </section>
    )
}

export default FooterLeftSection