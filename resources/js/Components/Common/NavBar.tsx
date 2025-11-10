import { NavBarProps } from "@/index"
import NavBarLogoAndLanguageChanger from "./NavBarLogoAndLanguageChanger"
import NavLinks from "./NavLinks"

const NavBar = ({ navBarProps }: { navBarProps: NavBarProps }) => {
  return (
    <nav className=" max-screen w-full  h-20 flex justify-between items-center gap-5 saveSpace fixed top-0 left-1/2 -translate-x-1/2 z-[1000000] bg-white ">
      {/* the links of nav bar */}
      <NavLinks navLinks={navBarProps.navLinks} />
      {/* here is logo and language changer */}
      <NavBarLogoAndLanguageChanger icon={navBarProps.lang.icon} logo={navBarProps.logo} />
    </nav>
  )
}

export default NavBar
