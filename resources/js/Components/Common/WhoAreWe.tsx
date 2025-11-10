import Description from "./Description"
import SectionTitle from "./SectionTitle"

const WhoAreWe = ({ title, description, locationIcon, location }: { title: string, description: string, locationIcon: string, location: string }) => {
  return (
    <div className=" max-w-96 px-5 ">
      <SectionTitle className="text-start text-2xl  font-bold text-buttonBg mb-5 " children={title} />
      <Description className=" text-white/85 text-justify mb-4 " children={description} />
      <div className=" flex justify-start items-start gap-3 ">
        <img className=" self-end " src={locationIcon} alt="" />
        <Description className=" text-white/85 text-justify " children={location} />
      </div>
    </div>
  )
}

export default WhoAreWe
