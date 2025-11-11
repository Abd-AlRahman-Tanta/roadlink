import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import More from "./More";

const NavLinks = ({ openListOnSmallScreens, navLinks, moreText }: { openListOnSmallScreens: boolean, moreText: string, navLinks: { text: string, link: string }[] }) => {
  const ul = useRef<HTMLDivElement | null>(null);
  const [links, setLinks] = useState<number | null>(null);
  const [openMoreList, setOpenMoreList] = useState(false);
  // handle open list
  const openList = () => {
    setOpenMoreList(!openMoreList);
  }
  // set how many elements will i slice in each famous screen size
  const setWindowSize = () => {
    const screen = window.innerWidth;
    setLinks(prev => {
      if (screen >= 1440)
        return null;
      else if (screen < 1440 && screen >= 1366)
        return 1;
      else if (screen < 1366 && screen >= 1280)
        return 2;
      else if (screen < 1280 && screen >= 1120)
        return 3;
      else if (screen < 1120 && screen > 992)
        return 4;
      else if (screen <= 992)
        return null;
    });
  }
  // handle click outside
  const closeWhenClickOutSide = (e: any) => {
    if (ul.current && !ul.current.contains(e.target))
      setOpenMoreList(false);
  }
  useEffect(() => {
    setWindowSize();
    window.addEventListener("resize", setWindowSize);
    return () => window.removeEventListener("resize", setWindowSize);
  }, [])
  useEffect(() => {
    window.addEventListener("click", closeWhenClickOutSide);
    return () => window.removeEventListener("click", closeWhenClickOutSide);
  }, [])
  return (
    <ul className={`flex  bg-white justify-between  items-center relative gap-4 desc:py-5 desc:flex-col desc:fixed desc:w-full desc:top-full  desc:left-0 desc:h-[calc(100vh-80px)] desc:justify-start desc:gap-5 ${openListOnSmallScreens ? "desc:translate-x-0" : "desc:-translate-x-full"} desc:duration-300 desc:overflow-x-hidden`}>
      {
        // regular nav links...
        navLinks.slice(0, navLinks.length - links).map((navLink, i) => (<Link href={navLink.link} className=" p-2 text-lg font-medium  " key={i}>{navLink.text}</Link>))
      }
      {
        // if links is not null..then more button will apear...
        links &&
        <div ref={ul} onClick={openList} className=" flex justify-start items-center cursor-pointer px-2 py-2 text-lg font-medium  ">
          {moreText}
          <span className={`self-end ${openMoreList && "rotate-180"} duration-200`}>
            <MdArrowDropDown />
          </span>
        </div>
      }
      {/* if links is not nul..then more list will be underServe */}
      {
        links && <More open={openMoreList} navLinks={navLinks.slice(navLinks.length - links)} />
      }
    </ul>
  )
}

export default NavLinks
