import Description from "./Description"
import Icon from "./Icon"

const Property = ({ image, description }: { image: string, description: string }) => {
  return (
    <div className=" w-full p-5 flex flex-col justify-center items-center gap-5 bg-white rounded-lg ">
      <Icon className="bg-buttonBg/10" image={image} />
      <Description className=" text-xl font-medium text-black " children={description} />
    </div>
  )
}

export default Property
