import { ReactNode } from "react"

const SectionTitle = ({ children, className }: { children: string | ReactNode, className?: string }) => {
  return (
    <h3 className={` ${className} text-center`}>
      {children}
    </h3>
  )
}

export default SectionTitle
