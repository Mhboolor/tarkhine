import React from 'react'
import TarkhineBranchCard from './TarkhineBranchCard'

const TarkhineBranches = () => {
    const branchDetails = [
        {
            img: "../src/assets/images/branches/branch1-desktop.png",
            branchTitle: 'شعبه اکباتان',
            branchAddress: 'شهرک اکباتان، فاز ۳، مجتمع اداری کوروش، طبقه سوم'
        },
        {
            img: "../src/assets/images/branches/branch2-desktop.png",
            branchTitle: 'شعبه چالوس',
            branchAddress: 'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش   '
        },
        {
            img: "../src/assets/images/branches/branch3-desktop.png",
            branchTitle: 'شعبه اقدسیه',
            branchAddress: 'خیابان اقدسیه، نرسیده به میدان خیام'
        },
        {
            img: "../src/assets/images/branches/branch4-desktop.png",
            branchTitle: 'شعبه ونک',
            branchAddress: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر'
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