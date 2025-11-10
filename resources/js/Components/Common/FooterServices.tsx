import Description from "./Description"
import SectionTitle from "./SectionTitle"

const FooterServices = ({ title, services }: { title: string, services: string[] }) => {
  return (
    <div className=" max-w-64 px-5 ">
      <SectionTitle className="  text-start text-2xl  font-bold text-buttonBg mb-5  " children={title} />
      {
        services.map((service, i) => (<Description key={i} className=" my-5 text-white/85 " children={service} />))
      }
    </div>
  )
}

export default FooterServices
