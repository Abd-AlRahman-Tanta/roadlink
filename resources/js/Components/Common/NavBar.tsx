import { NavBarProps } from "@/index"
import { useState } from "react"
import Bars from "./Bars"
import NavBarLogoAndLanguageChanger from "./NavBarLogoAndLanguageChanger"
import NavLinks from "./NavLinks"

const NavBar = ({ navBarProps }: { navBarProps: NavBarProps }) => {
  const [openListOnSmallScreens, setOpenListOnSmallScreens] = useState(false);
  return (
    <nav className=" max-screen w-full  h-20 flex justify-between items-center gap-1 saveSpace fixed top-0 left-1/2 -translate-x-1/2 z-[1000000] bg-white ">
      {/* bars for small screens */}
      <Bars list={openListOnSmallScreens} showList={setOpenListOnSmallScreens} />
      {/* the links of nav bar */}
      <NavLinks openListOnSmallScreens={openListOnSmallScreens} moreText={navBarProps.moreText} navLinks={navBarProps.navLinks} />
      {/* here is logo and language changer */}
      <NavBarLogoAndLanguageChanger icon={navBarProps.lang.icon} logo={navBarProps.logo} />
    </nav>
  )
}

export default NavBar
