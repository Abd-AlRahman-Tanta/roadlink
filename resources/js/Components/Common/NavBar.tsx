import { NavBarProps } from "@/index"
import NavBarLogoAndLanguageChanger from "./NavBarLogoAndLanguageChanger"
import NavLinks from "./NavLinks"

const NavBar = ({ navBarProps }: { navBarProps: NavBarProps }) => {
  return (
    <nav className=" w-full h-20 flex justify-between items-center gap-5 saveSpace fixed top-0 left-0 z-[1000000] bg-white">
      <NavLinks navLinks={navBarProps.navLinks} />
      <NavBarLogoAndLanguageChanger icon={navBarProps.lang.icon} logo={navBarProps.logo} />
    </nav>
  )
}

export default NavBar
