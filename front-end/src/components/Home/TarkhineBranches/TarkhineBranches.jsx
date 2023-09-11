import React from 'react'
import TarkhineBranchCard from './TarkhineBranchCard'

const TarkhineBranches = () => {
    const branchDetails = [
        {
            imgDesktop: 'mobileBranch1',
            imgMobile: 'mobileBranch1',
            alt: 'شعبه اکباتان',
            branchTitle: 'شعبه اکباتان',
            branchAddress: 'شهرک اکباتان، فاز ۳، مجتمع اداری کوروش، طبقه سوم'
        },
        {
            imgDesktop: 'desktopBranch2',
            imgMobile: 'mobileBranch2',
            alt: 'شعبه چالوس',
            branchTitle: 'شعبه چالوس',
            branchAddress: 'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی   '
        },
        {
            imgDesktop: 'desktopBranch3',
            imgMobile: 'mobileBranch3',
            alt: 'شعبه اقدسیه',
            branchTitle: 'شعبه اقدسیه',
            branchAddress: 'خیابان اقدسیه، نرسیده به میدان خیام، پلاک ۸'
        },
        {
            imgDesktop: 'desktopBranch4',
            imgMobile: 'mobileBranch4',
            alt: 'شعبه ونک',
            branchTitle: 'شعبه ونک',
            branchAddress: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶'
        },
    ]
    return (
        <section className='tarkhine-branches w-[90%] py-6 mx-auto flex flex-col gap-8 items-center'>
            <h6 className='text-h4 font-black'>ترخینه گردی</h6>
            <div className="branches flex flex-col md:flex-row gap-4 items-center">
                {branchDetails.map(branch => (
                    <TarkhineBranchCard {...branch} />
                ))}
            </div>
        </section>
    )
}

export default TarkhineBranches