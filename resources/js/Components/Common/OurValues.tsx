import { OurValuesProps } from "@/index"
import SectionTitle from "./SectionTitle"
import Step from "./Step"

const OurValues = ({ ourValue }: { ourValue: OurValuesProps }) => {
  return (
    <div className=" mt-9 ">
      <SectionTitle children={ourValue.title} className=" sectionTitle font-bold text-buttonBg mb-6 " />
      <div className=" w-full flex justify-center items-start gap-5 ">
        {
          ourValue.values.map((value, i) => (
            <div key={i} className="w-full  rounded-lg p-5 bg-giveAndRecieveBackgroundColor text-center ">
              <Step imageClassName="bg-white/10" image={value.image} description={value.description} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OurValues
