import React from 'react'
import TarkhineBranchCard from './TarkhineBranchCard'

const TarkhineBranches = () => {
    const branchDetails = [
         {
            imgDesktop: '../../src/assets/images/branches/branch1-desktop.png',
            imgMobile: 'src/assets/images/branches/branch1-mobile.png',
            alt: 'شعبه اکباتان',
            branchTitle: 'شعبه اکباتان',
            branchAddress: 'شهرک اکباتان، فاز ۳، مجتمع اداری کوروش، طبقه سوم'
        },
        {
            imgDesktop: '../../src/assets/images/branches/branch2-desktop.png',
            imgMobile: 'src/assets/images/branches/branch2-mobile.png',
            alt: 'شعبه چالوس',
            branchTitle: 'شعبه چالوس',
            branchAddress: 'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی   '
        },
        {
            imgDesktop: '../../src/assets/images/branches/branch3-desktop.png',
            imgMobile: 'src/assets/images/branches/branch3-mobile.png',
            alt: 'شعبه اقدسیه',
            branchTitle: 'شعبه اقدسیه',
            branchAddress: 'خیابان اقدسیه، نرسیده به میدان خیام، پلاک ۸'
        },
        {
            imgDesktop: '../../src/assets/images/branches/branch4-desktop.png',
            imgMobile: 'src/assets/images/branches/branch4-mobile.png',
            alt: 'شعبه ونک',
            branchTitle: 'شعبه ونک',
            branchAddress: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶'
        },
    ]
    return (
        <section>
            <h6>ترخینه گردی</h6>
            {branchDetails.map(branch => (
                <TarkhineBranchCard {...branch} />
            ))}
        </section>
    )
}

export default TarkhineBranches