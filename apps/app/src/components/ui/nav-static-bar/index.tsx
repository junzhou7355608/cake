import NavBar from '../nav-bar'
import styles from './index.module.scss'

export interface NavStaticBarProps {
  title: string
  fixed?: boolean
}

export default function NavStaticBar(props: NavStaticBarProps) {
  const { title, fixed } = props

  return (
    <NavBar
      className={styles.bavBar}
      border={false}
      title={title}
      fixed={fixed}
    >
    </NavBar>
  )
}
