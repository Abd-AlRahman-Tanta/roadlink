
const Icon = ({ image, className }: { image: string, className?: string }) => {
  return (
    <div className={`${className} w-14 h-14 rounded-full flexCenter  `}>
      <img className=" w-8 h-8 object-cover " src={image} alt="" />
    </div >
  )
}

export default Icon
