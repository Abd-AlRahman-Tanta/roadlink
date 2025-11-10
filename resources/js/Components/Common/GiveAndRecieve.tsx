import { GiveAndRecieveProps } from "@/index"
import SectionTitle from "./SectionTitle"
import Step from "./Step"

const GiveAndRecieve = ({ giveAndRecieve }: { giveAndRecieve: GiveAndRecieveProps }) => {
  return (
    <div id="steps" className=" w-full py-20 px-24 rounded-lg bg-giveAndRecieveBackgroundColor mt-20  ">
      <SectionTitle className=" text-white sectionTitle font-bold mb-28 " children={giveAndRecieve.title} />
      <div className=" w-full flex justify-center items-start gap-16 ">
        {
          giveAndRecieve.steps.map((step, i) => (<Step key={i} image={step.image} title={step.title} arrowImage={step.arrowImage} description={step.description} />))
        }
      </div>
    </div>
  )
}

export default GiveAndRecieve
