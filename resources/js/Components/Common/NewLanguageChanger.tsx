import { Link, usePage } from '@inertiajs/react';

const NewLanguageChanger = ({ icon }: { icon: string }) => {
  const { locale, supportedLocals } = usePage().props
  const { url } = usePage();
  return (
    Object.entries(supportedLocals).map(([lang]) => (
      locale != lang &&
      <Link
        key={lang}
        className="text-buttonBg flex items-end cursor-pointer gap-1 text-xl font-bold p-3 "
        href={lang == "ar" ? "/ar" + url.slice(3) : "/en" + url}>
        {lang}
        <img className='relative bottom-1' src={icon} alt="" />
      </Link>
    ))
  )
}

export default NewLanguageChanger

