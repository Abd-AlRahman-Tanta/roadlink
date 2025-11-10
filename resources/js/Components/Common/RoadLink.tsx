import { RoadLinkProps } from "@/index"
import Description from "./Description"
import RegularLayer from "./RegularLayer"
import SectionTitle from "./SectionTitle"
import Tall from "./Tall"

const RoadLink = ({ roadLink }: { roadLink: RoadLinkProps }) => {
  return (
    <div id="roadLink">
      <SectionTitle className=" sectionTitle font-bold text-buttonBg mb-9 " children={roadLink.title} />
      {/* under the title */}
      <div className=" w-full flex justify-center items-start gap-5 ">
        {/* img */}
        <div className=" max-w-md w-full aspect-[1.4] relative rounded-lg overflow-hidden ">
          <img className=" absCover " src={roadLink.image} alt="" />
          <RegularLayer />
        </div>
        {/* definations */}
        <div className=" w-full grid grid-cols-2 grid-rows-2 gap-5 ">
          {
            roadLink.descriptions.map((description, i) => (
              <div className=" w-full flex justify-start items-start gap-3  " key={i}>
                <Tall className=" w-2 h-36 " />
                <Description className=" text-xl  text-roadLinkText py-6 " children={description} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RoadLink
