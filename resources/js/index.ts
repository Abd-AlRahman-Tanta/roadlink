// header interfaces
export interface NavBarProps {
  logo: string,
  navLinks: { text: string, link: string }[],
  lang: { text: string, icon: string }
}
export interface HeroProps {
  image: string,
  title: string,
  description: string,
  button: {
    text: string,
    link: string
  }
}
export interface HeaderProps {
  nav: NavBarProps,
  hero: HeroProps
}
// end header interfaces!



// properties interfaces
export type PropertiesProps = { icon: string, description: string }[]
// OurServicesProps interface
export type OurServicesProps = {
  title: string,
  services: { image: string, description: string }[]
}
