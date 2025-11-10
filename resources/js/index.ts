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
  services: { image: string, description: string, explainations: string[] }[]
}
//giveAndRecieve interface
export type GiveAndRecieveProps = {
  title: string,
  arrowImage: string,
  steps: { image: string, description: string, title: string }[]
}
// logesticSolutions interface
export type LogesticSolutionsProps = {
  image: string,
  title: string,
  solutions: string[],
  button: {
    text: string,
    link: string
  }
}
// roadLink section interface
export type RoadLinkProps = {
  title: string,
  image: string,
  descriptions: string[],
}
// ourValues section interface
export type OurValuesProps = {
  title: string,
  values: { image: string, description: string }[]
}
// certifiedFor section props
export type CertifiedForProps = {
  title: string,
  images: string[]
}
// commonQuestions section interface
export type CommonQuestionsProps = {
  title: string,
  questions: { title: string, titleLink: string, description: string, descriptionLink: string }[]
}
// contactUs section interface
export type ContactUsProps = {
  image: string,
  title: string,
  inputs: { label: string, type: string, name: string }[],
  button: { type: string, text: string }
}
// footer section props
export type FooterProps = {
  whoAreWe: {
    title: string,
    description: string,
    locationIcon: string,
    location: string
  },
  ourServices: {
    title: string,
    services: string[]
  },
  contactWithUs: {
    title: string,
    informations: {
      image: string,
      content: string
    }[],
  },
  rights: string
}
