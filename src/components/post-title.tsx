import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-tight md:mb-6 mb-3 max-w-3xl mx-auto">
      {children}
    </h1>
  )
}

export default PostTitle
