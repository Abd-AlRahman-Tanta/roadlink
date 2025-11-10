import Description from "./Description"
import RegularLayer from "./RegularLayer"
import Tall from "./Tall"

const Service = ({ image, description }: { image: string, description: string }) => {
  return (
    <div className="flex flex-col justify-end items-start p-6 relative aspect-[0.8/1] w-full rounded-lg overflow-hidden  ">
      <img className="absolute top-0 left-0 w-full h-full object-cover " src={image} alt="" />
      <RegularLayer />
      <div className="flex justify-center items-center gap-4 relative z-10 ">
        <Tall className=" w-1 h-11 " />
        <Description children={description} className="text-2xl font-bold text-white " />
      </div>
    </div>
  )
}

export default Service
