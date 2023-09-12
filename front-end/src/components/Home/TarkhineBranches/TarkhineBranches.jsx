import TarkhineBranchCard from "./TarkhineBranchCard";

const TarkhineBranches = () => {
  const branchDetails = [
    {
      id: 1,
      img: "../src/assets/images/branches/branch1-desktop.png",
      branchTitle: "شعبه اکباتان",
      branchAddress: "شهرک اکباتان، فاز ۳، مجتمع اداری کوروش، طبقه سوم",
    },
    {
      id: 2,
      img: "../src/assets/images/branches/branch2-desktop.png",
      branchTitle: "شعبه چالوس",
      branchAddress: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش   ",
    },
    {
      id: 3,
      img: "../src/assets/images/branches/branch3-desktop.png",
      branchTitle: "شعبه اقدسیه",
      branchAddress: "خیابان اقدسیه، نرسیده به میدان خیام",
    },
    {
      id: 4,
      img: "../src/assets/images/branches/branch4-desktop.png",
      branchTitle: "شعبه ونک",
      branchAddress: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر",
    },
  ];
  return (
    <section className="tarkhine-branches container py-6 mx-auto flex flex-col gap-8 items-center">
      <h6 className="text-h4 font-black">ترخینه گردی</h6>
      <div className="branches grid grid-cols-1 md:grid-cols-4 gap-4">
        {branchDetails.map((branch) => (
          <TarkhineBranchCard key={branch.id} {...branch} />
        ))}
      </div>
    </section>
  );
};

export default TarkhineBranches;
