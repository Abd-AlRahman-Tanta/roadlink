import NewLanguageChanger from './NewLanguageChanger'

const NavBarLogoAndLanguageChanger = ({ icon, logo }: { icon: string, logo: string }) => {
  return (
    <div className='flex justify-center items-center gap-3'>
      <NewLanguageChanger icon={icon} />
      {/* the website logo  */}
      <a href="#home"><img className="w-56" src={logo} alt="" /></a>
    </div>
  )
}

export default NavBarLogoAndLanguageChanger
