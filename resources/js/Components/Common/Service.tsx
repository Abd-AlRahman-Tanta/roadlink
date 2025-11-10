import Description from "./Description"
import RegularLayer from "./RegularLayer"
import Tall from "./Tall"

const Service = ({ image, description, explainations }: { image: string, description: string, explainations: string[] }) => {
  return (
    <div className="group flex flex-col justify-end items-start p-6 relative aspect-[0.8/1] w-full rounded-lg overflow-hidden  ">
      {/* image with layer */}
      <img className="absolute top-0 left-0 w-full h-full object-cover " src={image} alt="" />
      <RegularLayer />
      {/* from here the services starts */}
      <div className={` w-full max-h-20 group-hover:max-h-80 overflow-hidden flex flex-col justify-start items-start gap-1  relative z-10   duration-500 `}>
        {/* title of service */}
        <div className=" w-full flex justify-start items-center relative mb-4 p-3">
          {/* this <Tall/> jsx element is the orange stick on the right of the service's title...when hover it will fill the background with its orange color */}
          <Tall className={` w-1 h-full group-hover:w-full  absolute start-0 top-1/2 -translate-y-1/2 -z-10 duration-500 `} />
          <Description children={description} className="text-2xl font-bold text-white  " />
        </div>
        {/* explainations apears when hover */}
        {
          explainations.map((explaination, i) => (<Description key={i} className=" text-white opacity-0 group-hover:opacity-100 delay-100 duration-500  " children={". " + explaination} />))
        }
      </div>
    </div>
  )
}

export default Service
