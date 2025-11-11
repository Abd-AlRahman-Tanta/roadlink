import { HeroProps } from '@/index'
import { Link } from '@inertiajs/react'
import HeroLayer from './HeroLayer'
import MainHeadline from './MainHeadline'
import SectionTitle from './SectionTitle'

const Hero = ({ hero }: { hero: HeroProps }) => {
  return (
    <div className=' relative w-full min-h-screen flex flex-col justify-center items-center gap-24 saveSpace pt-20 '>
      {/* background */}
      <img className=' w-full h-full absolute top-0 left-0 object-cover -z-10' src={hero.image} alt="" />
      {/* layer */}
      <HeroLayer className='-z-10' />
      {/* title and description */}
      <div className='text-center'>
        <MainHeadline className='mainTitle' children={hero.title} />
        <SectionTitle className='sectionTitle text-white ' children={hero.description} />
      </div>
      {/* button */}
      <Link className='button' href={hero.button.link}>{hero.button.text}</Link>
    </div>
  )
}

export default Hero
