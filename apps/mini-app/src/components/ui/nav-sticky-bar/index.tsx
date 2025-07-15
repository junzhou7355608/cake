import type { NavStaticBarProps } from '../nav-static-bar'
import NavStaticBar from '../nav-static-bar'

export type NavStickyBarProps = NavStaticBarProps

export default function NavStickyBar(props: NavStickyBarProps) {
  const { ...restProps } = props

  return <NavStaticBar {...restProps} fixed></NavStaticBar>
}
