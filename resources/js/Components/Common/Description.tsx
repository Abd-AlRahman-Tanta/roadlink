import { ReactNode } from 'react'

const Description = ({ children, className, dir }: { dir?: string, children: ReactNode | string, className?: string }) => {
  return (
    <p dir={`${dir && dir}`} className={`${className}`}>
      {children}
    </p>
  )
}

export default Description
