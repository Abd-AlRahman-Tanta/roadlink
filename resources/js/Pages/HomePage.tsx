import Header from "@/Components/Common/Header"
import Properties from "@/Components/Common/Properties"
import Services from "@/Components/Common/Services"

const HomePage = ({ data, locale }) => {
  return (
    <div className="w-full">
      {/* header */}
      <Header data={data} />
      {/* page */}
      <div className=" w-full bg-homePageBack saveSpace pt-12 ">
        {/* first section properties */}
        <Properties properties={data.properties} />
        {/* second section Our Services */}
        <Services ourServices={data.ourServices} />
      </div>
    </div>
  )
}
export default HomePage
