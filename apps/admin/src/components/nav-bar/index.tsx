import { NavBar as AntdNavBar } from 'antd-mobile'
import type { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar(props: PropsWithChildren) {
  const { children } = props

  const navigate = useNavigate()

  const onBack = () => {
    navigate(-1)
  }
  return (
    <div className="w-full bg-white">
      <AntdNavBar onBack={onBack}>{children}</AntdNavBar>
    </div>
  )
}
