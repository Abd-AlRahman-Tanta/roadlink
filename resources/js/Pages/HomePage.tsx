import CertifiedFor from "@/Components/Common/CertifiedFor"
import CommonQuestions from "@/Components/Common/CommonQuestions"
import ContactUs from "@/Components/Common/ContactUs"
import Footer from "@/Components/Common/Footer"
import GiveAndRecieve from "@/Components/Common/GiveAndRecieve"
import Header from "@/Components/Common/Header"
import LogesticSolutions from "@/Components/Common/LogesticSolutions"
import OurValues from "@/Components/Common/OurValues"
import Properties from "@/Components/Common/Properties"
import RoadLink from "@/Components/Common/RoadLink"
import Services from "@/Components/Common/Services"

const HomePage = ({ data }) => {
  return (
    <div className="w-full">
      {/* header */}
      <Header data={data} />
      {/*same page with background */}
      <div className=" w-full bg-homePageBack saveSpace pt-12 pb-28 ">
        {/* first section properties */}
        <Properties properties={data.properties} />
        {/* second section Our Services */}
        <Services ourServices={data.ourServices} />
        {/* Give And Recieve section */}
        <GiveAndRecieve giveAndRecieve={data.giveAndRecieve} />
        {/* logestic solutions */}
        <LogesticSolutions logesticSolutions={data.logesticSolutions} />
      </div>
      {/* same page with white background */}
      <div className="  w-full  saveSpace pt-16  ">
        {/* RoadLink section */}
        <RoadLink roadLink={data.roadLink} />
        {/* ourValues section */}
        <OurValues ourValue={data.ourValue} />
        {/* certified for section */}
        <CertifiedFor certifiedFor={data.certifiedFor} />
      </div>
      {/* same page with background */}
      <div className=" w-full bg-homePageBack saveSpace pt-12  ">
        {/* common questions section */}
        <CommonQuestions commonQuestions={data.commonQuestions} />
        {/* contact us section */}
        <ContactUs contactUs={data.contactUs} />
      </div>
      {/* footer */}
      <Footer footer={data.footer} />
    </div>
  )
}
export default HomePage
