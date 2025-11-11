import { OurServicesProps } from "@/index"
import SectionTitle from "./SectionTitle"
import Service from "./Service"

const Services = ({ ourServices }: { ourServices: OurServicesProps }) => {
  return (
    <div id="ourServices" className=" w-full pt-20  ">
      {/* title of section */}
      <SectionTitle className=" sectionTitle font-bold  text-buttonBg mb-9" children={ourServices.title} />
      {/* each service contains img with layer as background and the title of service with its explainations */}
      <div className=" w-full flex desc:flex-col justify-center items-center gap-5 ">
        {
          ourServices.services.map((service, i) => (<Service key={i} explainations={service.explainations} image={service.image} description={service.description} />))
        }
      </div>
    </div>
  )
}

export default Services
