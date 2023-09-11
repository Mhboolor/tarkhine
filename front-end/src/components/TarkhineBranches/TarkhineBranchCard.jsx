
const TarkhineBranchCard = (props) => {
    const {imgDesktop, imgMobile, alt, branchTitle, branchAddress} = props
    return (
        <section className='branch-card flex'>
            <div className="branch-card__right">
                <img src={imgMobile} />
            </div>
            <div className='branch-card__left'>
                some details
            </div>
        </section>
    )
}

export default TarkhineBranchCard