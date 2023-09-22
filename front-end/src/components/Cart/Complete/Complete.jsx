import CompleteRightCenter from "./CompleteRightCenter"
import CompleteRightTop from "./CompleteRightTop"
import CompleteRightBottom from "./CompleteRightBottom"
import CompleteLeft from "./CompleteLeft"

function Complete() {
  return (
    <div className="flex gap-4 w-full flex-col md:flex-row">
      <div className="md:w-7/12 w-full flex flex-col gap-8">
        <CompleteRightTop />
        <CompleteRightCenter />
        <CompleteRightBottom />
      </div>
      
        <CompleteLeft />
      
    </div>
  )
}

export default Complete