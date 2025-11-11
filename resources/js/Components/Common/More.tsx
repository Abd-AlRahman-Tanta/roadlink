import { Link } from "@inertiajs/react"

const More = ({ navLinks, open }: { navLinks: { text: string, link: string }[], open: boolean }) => {
  return (
    <ul className={`z-[1000] ${open ? "max-h-96" : "max-h-0"}  overflow-hidden duration-500 absolute top-20 end-0 ltr:translate-x-1/2 rtl:-translate-x-1/2  rounded-lg bg-white   `}>
      {
        navLinks.map((navLink, i) => (<Link key={i} className="block m-4 hover:underline  " href={navLink.link}>{navLink.text}</Link>))
      }
    </ul>
  )
}

export default More
