import { usePage } from "@inertiajs/react";

const RoadLinkLayout = ({ children }) => {
  const { locale } = usePage().props
  let rtl = locale == "ar";
  return (
    <div dir={rtl ? "rtl" : "ltr"} className={`max-screen rtl:font-[Changa] ltr:font-[Inter]  min-h-screen mx-auto `}>
      {children}
    </div>
  )
}

export default RoadLinkLayout
