import { NavBar as AntdNavBar, type NavBarProps } from 'antd-mobile'
import type { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar(props: PropsWithChildren<NavBarProps>) {
  const { children, ...restProps } = props

  const navigate = useNavigate()

  const onBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <div className="w-full md:w-[430px] fixed top-0 left-0 right-0 m-auto bg-white z-10 border-b border-gray-100">
        <AntdNavBar onBack={onBack} {...restProps}>
          {children}
        </AntdNavBar>
      </div>
      <div className="h-[45px] "></div>
    </div>
  )
}
