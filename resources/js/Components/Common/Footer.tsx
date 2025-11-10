import { FooterProps } from "@/index"
import Description from "./Description"
import FooterContactUs from "./FooterContactUs"
import FooterServices from "./FooterServices"
import WhoAreWe from "./WhoAreWe"

const Footer = ({ footer }: { footer: FooterProps }) => {
  return (
    <div className=" w-full py-16 footerGradient saveSpace ">
      {/* footer starts from here */}
      <div className=" w-full pt-8 px-5 pb-20 flex justify-between items-start gap-20 ">
        {/* who are we part */}
        <WhoAreWe title={footer.whoAreWe.title} description={footer.whoAreWe.description} location={footer.whoAreWe.location} locationIcon={footer.whoAreWe.locationIcon} />
        {/* services in footer part */}
        <FooterServices title={footer.ourServices.title} services={footer.ourServices.services} />
        {/* connection information part in footer */}
        <FooterContactUs title={footer.contactWithUs.title} informations={footer.contactWithUs.informations} />
      </div>
      {/* rights in footer */}
      <Description dir="ltr" className=" text-white py-6 px-4 text-center " children={footer.rights} />
    </div>
  )
}

export default Footer
