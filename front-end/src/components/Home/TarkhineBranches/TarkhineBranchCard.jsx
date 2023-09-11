
const TarkhineBranchCard = ({imgDesktop, imgMobile, alt, branchTitle, branchAddress}) => {
    
    return (
        <section className='branch-card flex w-full md:flex-col border-2 rounded-8 border-primary h-full'>
            <div 
            className={`branch-card__right rounded-t-8 bg-center w-full h-full md:h-[12rem] bg-${imgMobile} bg-no-repeat bg-cover`}>
            </div>
            <div className='branch-card__left py-2 px-1 flex items-center gap-2 flex-col'>
                <h3 className="font-semibold">{branchTitle}</h3>
                <p className="text-center text-caption-sm">{branchAddress}</p>
            </div>
        </section>
    )
}

export default TarkhineBranchCard