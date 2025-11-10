import { LogesticSolutionsProps } from "@/index"
import RegularLayer from "./RegularLayer"
import Solutions from "./Solutions"

const LogesticSolutions = ({ logesticSolutions }: { logesticSolutions: LogesticSolutionsProps }) => {
  return (
    <div id="solutions" className=" w-full flex justify-center items-start gap-5 mt-20  ">
      {/* logestic solutions */}
      <Solutions title={logesticSolutions.title} solutions={logesticSolutions.solutions} button={logesticSolutions.button} />
      <div className=" max-w-xl w-full aspect-[1.5]  relative rounded-lg overflow-hidden ">
        <img className="  absCover  " src={logesticSolutions.image} alt="" />
        <RegularLayer />
      </div>
    </div>
  )
}

export default LogesticSolutions
