
const NavLinks = ({ navLinks }: { navLinks: { text: string, link: string }[] }) => {
  return (
    <ul className="flex justify-between items-center  gap-5">
      {
        navLinks.map((navLink, i) => (<a href={navLink.link} className=" px-4 py-2 text-lg font-medium  " key={i}>{navLink.text}</a>))
      }
    </ul>
  )
}

export default NavLinks
