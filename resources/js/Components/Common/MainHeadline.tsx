import { ReactNode } from "react"

const MainHeadline = ({ children, className }: { children: ReactNode | string, className?: string }) => {
  return (
    <h1 className={` ${className}`}>
      {children}
    </h1>
  )
}

export default MainHeadline
