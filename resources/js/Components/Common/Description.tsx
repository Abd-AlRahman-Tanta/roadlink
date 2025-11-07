import { ReactNode } from 'react'

const Description = ({ children, className }: { children: ReactNode | string, className?: string }) => {
  return (
    <p className={`${className}`}>
      {children}
    </p>
  )
}

export default Description
