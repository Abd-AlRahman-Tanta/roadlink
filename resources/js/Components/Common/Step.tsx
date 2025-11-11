import Description from "./Description";
import Icon from "./Icon";

const Step = ({ title, image, description, arrowImage, imageClassName, active, lastOne, descriptionTextSize }: { lastOne?: boolean, active?: boolean, imageClassName?: string, title?: string, image: string, description?: string, arrowImage?: string, descriptionTextSize?: string }) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center gap-4 ">
      {/* iamgeClassName and image for icon jsx element */}
      <Icon className={imageClassName} image={image} />
      {
        // arrow image for GiveAndRecieve section...otherwise it will render simple description in ourValues Section
        arrowImage ?
          // explaination: when active is true...it will make the arrow picture visible ..otherwise it will make arrow picture not visible and show orange border to the step..and if lastOne is true then last step will render an orange background without the arrow picture..
          <div className={` w-full h-16 relative flex justify-start items-center  `}>
            <img className={` w-full h-full absolute top-0 left-0 z-10 ltr:-scale-100 ${active && !lastOne ? "opacity-100" : "opacity-0"} duration-300  `} src={arrowImage} alt="" />
            <Description className={`w-full text-xl  text-center font-bold text-white   relative z-20  rounded-md py-3 px-9 ${!active && "border-2 border-buttonBg "} ${active && lastOne && "bg-buttonBg border-2 border-buttonBg duration-300"} delay-100  `} children={title} />
          </div>
          :
          // this will be rendered in ourValues Section
          <Description className="w-full text-xl text-center font-bold text-white rounded-md  " children={title} />
      }
      <Description className={`w-full  text-white ${descriptionTextSize}  `} children={description} />
    </div>
  )
}

export default Step
