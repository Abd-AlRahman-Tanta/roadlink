import { CertifiedForProps } from "@/index"
import SectionTitle from "./SectionTitle"

const CertifiedFor = ({ certifiedFor }: { certifiedFor: CertifiedForProps }) => {
  return (
    <div id="certified" className=" mt-14 pt-12 pb-12">
      {/*  title of section */}
      <SectionTitle className=" sectionTitle font-bold text-buttonBg mb-6 " children={certifiedFor.title} />
      {/* images container */}
      <div className=" w-full flex desc:flex-col justify-between items-start desc:items-center desc:gap-10 gap-5  px-36 ">
        {
          certifiedFor.images.map((image, i) => (
            <img className="h-[4.5rem] w-auto object-contain" src={image} key={i} alt="" />)
          )
        }
      </div>
    </div>
  )
}

export default CertifiedFor
