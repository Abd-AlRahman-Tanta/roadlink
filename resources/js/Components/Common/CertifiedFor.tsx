import { CertifiedForProps } from "@/index"
import SectionTitle from "./SectionTitle"

const CertifiedFor = ({ certifiedFor }: { certifiedFor: CertifiedForProps }) => {
  return (
    <div id="certified" className=" mt-14 pt-12 pb-12">
      <SectionTitle className=" sectionTitle font-bold text-buttonBg mb-6 " children={certifiedFor.title} />
      <div className=" w-full flex justify-between items-start  px-36 ">
        {
          certifiedFor.images.map((image, i) => (<img className=" max-w-44 aspect-[1.8]  " src={image} key={i} alt="" />))
        }
      </div>
    </div>
  )
}

export default CertifiedFor
