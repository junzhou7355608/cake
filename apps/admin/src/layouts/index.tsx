import type { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  const { children } = props

  return (
    <div>
      {children}
    </div>
  )
}
