import type { PropsWithChildren } from 'react'

export default function Layout(props: PropsWithChildren) {
  const { children } = props

  return (
    <div className="min-h-screen min-w-full bg-bg-base flex justify-center">
      <div className="w-full min-h-screen md:w-[430px]">{children}</div>
    </div>
  )
}
