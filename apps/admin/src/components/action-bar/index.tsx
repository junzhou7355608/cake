import type { PropsWithChildren } from 'react'

export default function ActionBar(props: PropsWithChildren) {
  const { children } = props
  return (
    <div className="w-full px-3 md:w-[430px] fixed bottom-0 left-0 right-0 m-auto h-tabbar bg-white flex justify-center items-center">
      {children}
    </div>
  )
}
