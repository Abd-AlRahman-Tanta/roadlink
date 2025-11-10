import Description from "./Description"
import Icon from "./Icon"

const Step = ({ title, image, description, arrowImage, imageClassName }: { imageClassName?: string, title?: string, image: string, description: string, arrowImage?: string }) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center gap-4 ">
      <Icon className={imageClassName} image={image} />
      {
        arrowImage ?
          <div className="w-full h-16 relative flex justify-start items-center">
            <img className=" w-full h-full absolute top-0 left-0 z-10 " src={arrowImage} alt="" />
            <Description className="w-full  text-xl text-center font-bold text-white   relative z-20 " children={title} />
          </div>
          :
          title && <Description className="w-full text-xl text-center font-bold text-white rounded-md border-2 border-buttonBg py-3 px-9" children={title} />
      }
      <Description className="w-full text-lg text-white  " children={description} />
    </div>
  )
}

export default Step
