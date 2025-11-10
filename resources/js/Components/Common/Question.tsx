
import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Description from "./Description";

const Question = ({ title, titleLink, description, descriptionLink }: { title: string, description: string, titleLink: string, descriptionLink: string }) => {
  const question = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  // the operation walks with max-h set
  const openOrClose = () => {
    setOpen(!open);
  }
  // handle close the question when click outside
  const closeNow = (e: any) => {
    if (question.current && !question.current.contains(e.target))
      setOpen(false);
  }
  // add listener to click event
  useEffect(() => {
    window.addEventListener("click", closeNow)
    return () => window.removeEventListener("click", closeNow);
  })
  return (
    <div ref={question} onClick={openOrClose} className={`${open ? "max-h-80" : "max-h-16"}  cursor-pointer w-full px-5 py-6 bg-white rounded-lg duration-300  overflow-hidden `}>
      {/* question title with arrow icon */}
      <div className=" w-full flex justify-between items-start gap-5  ">
        <Description children={title} className=" text-xl text-buttonBg  " />
        <div className=" w-8 h-8 relative  ">
          < MdOutlineKeyboardArrowDown onClick={openOrClose} className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-3xl ${open && "rotate-180"} duration-300 `} />
        </div>
      </div>
      {/* this will show when click on the question */}
      <Description children={description} className=" text-lg mt-3 text-black " />
    </div>
  )
}

export default Question


