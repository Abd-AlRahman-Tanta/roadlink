import { Link } from "@inertiajs/react"
import Button from "../Button"
import Description from "./Description"
import SectionTitle from "./SectionTitle"

const Solutions = ({ title, solutions, button }: { title: string, solutions: string[], button: { text: string, link: string } }) => {
  return (
    <div className=" w-full ">
      {/* title of section */}
      <SectionTitle className="text-start text-buttonBg sectionTitle font-bold mb-9  " children={title} />
      {/* container of solutions with grid shape */}
      <div className=" w-full  grid grid-cols-2 grid-rows-2 gap-5 mb-9 mx-auto ">
        {
          solutions.map((solution, i) => (<Description className=" w-full text-xl text-center text-black py-8 px-12 border-2 border-buttonBg " key={i} children={solution} />))
        }
      </div>
      {/* link  */}
      <Link className=" w-fit rounded-lg flex justify-center items-center" href={button.link} >
        <Button className=" button" children={button.text} />
      </Link>
    </div>
  )
}

export default Solutions
