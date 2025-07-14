import type { NavStaticBarProps } from '../nav-static-bar'
import NavStaticBar from '../nav-static-bar'

export interface NavStickyBarProps extends NavStaticBarProps {
}

export default function NavStickyBar(props: NavStickyBarProps) {
  const { ...restProps } = props

  return (
    <NavStaticBar
      {...restProps}
      fixed
    >
    </NavStaticBar>
  )
}
