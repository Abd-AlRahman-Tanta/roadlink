import { OurServicesProps } from "@/index"
import SectionTitle from "./SectionTitle"
import Service from "./Service"

const Services = ({ ourServices }: { ourServices: OurServicesProps }) => {
  return (
    <div id="ourServices" className=" w-full pt-20  ">
      <SectionTitle className=" sectionTitle font-bold  text-buttonBg mb-9" children={ourServices.title} />
      <div className=" w-full flex justify-center items-center gap-5 ">
        {
          ourServices.services.map((service, i) => (<Service key={i} image={service.image} description={service.description} />))
        }
      </div>
    </div>
  )
}

export default Services
