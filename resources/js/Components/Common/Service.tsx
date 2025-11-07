import Description from "./Description"
import RegularLayer from "./RegularLayer"
import Tall from "./Tall"

const Service = ({ image, description }: { image: string, description: string }) => {
  return (
    <div className="flex flex-col justify-end items-start p-6 relative w-full min-h-96 ">
      <img className="absolute top-0 left-0 w-full h-full  " src={image} alt="" />
      <RegularLayer />
      <div className="flex justify-center items-center gap-4 relative z-10 ">
        <Tall className=" h-11 " />
        <Description children={description} className="text-2xl font-bold text-white " />
      </div>
    </div>
  )
}

export default Service
