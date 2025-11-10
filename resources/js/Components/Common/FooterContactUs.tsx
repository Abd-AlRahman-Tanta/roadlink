import Description from "./Description"
import SectionTitle from "./SectionTitle"

const FooterContactUs = ({ title, informations }: { title: string, informations: { image: string, content: string }[] }) => {
  return (
    <div className=" max-w-56 px-5 ">
      <SectionTitle className=" text-start text-2xl  font-bold text-buttonBg mb-5 " children={title} />
      {
        informations.map((information, i) => (
          <div dir="ltr" key={i} className=" flex justify-start items-start gap-3 my-3 ">
            <img className="  " src={information.image} alt="" />
            <Description className=" text-white/85 " children={information.content} />
          </div>
        ))
      }
    </div>
  )
}

export default FooterContactUs
