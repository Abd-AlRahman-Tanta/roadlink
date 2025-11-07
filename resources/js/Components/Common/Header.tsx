import { HeaderProps } from "@/index";
import Hero from "./Hero";
import NavBar from "./NavBar";

const Header = ({ data }: { data: HeaderProps }) => {
  return (
    <header id="home" className="w-full min-h-screen   ">
      <NavBar navBarProps={data.nav} />
      <Hero hero={data.hero} />
    </header>
  );
};

export default Header;
