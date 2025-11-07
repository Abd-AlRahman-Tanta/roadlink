import { usePage } from "@inertiajs/react";

const RoadLinkLayout = ({ children }) => {
  const { locale } = usePage().props
  let rtl = locale == "ar";
  return (
    <div dir={rtl ? "rtl" : "ltr"} className="layout  min-h-screen mx-auto ">
      {children}
    </div>
  )
}

export default RoadLinkLayout
