import { GiveAndRecieveProps } from "@/index"
import { useEffect, useState } from "react"
import SectionTitle from "./SectionTitle"
import Step from "./Step"

const GiveAndRecieve = ({ giveAndRecieve }: { giveAndRecieve: GiveAndRecieveProps }) => {
  // state to set which step is active to show the arrow on it
  const [arrowChange, setArrowChange] = useState(0);
  // this is the setter function for the state above
  const counter = () => {
    setArrowChange(prev => {
      if (prev == giveAndRecieve.steps.length - 1)
        return 0;
      else
        return prev + 1
    });
  }
  // setInterval to repeat calling the function of set
  useEffect(() => {
    const count = setInterval(counter, 1500);
    return () => clearInterval(count);
  }, [])
  return (
    <div id="steps" className=" w-full py-20 px-24 desc:p-10 rounded-lg bg-giveAndRecieveBackgroundColor mt-20  ">
      {/* the title of section */}
      <SectionTitle className=" text-white sectionTitle font-bold mb-28 " children={giveAndRecieve.title} />
      {/* the container of steps */}

      {/* each step can recieve an image and imageClassName for <icon/> jsx element...and title with description for the step...and arrowImage picture ...and 2 boolean parameters active , lastOne to set wich step it is active and which step is the last one  */}
      <div className=" w-full flex desc:flex-col justify-center items-start gap-16  ">
        {
          giveAndRecieve.steps.map((step, i) => (<Step descriptionTextSize="text-lg" lastOne={arrowChange == giveAndRecieve.steps.length - 1} active={i == arrowChange} key={i} image={step.image} title={step.title} arrowImage={giveAndRecieve.arrowImage} description={step.description} />))
        }
      </div>
    </div>
  )
}

export default GiveAndRecieve
