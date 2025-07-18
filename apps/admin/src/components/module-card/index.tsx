import { Card } from 'antd-mobile'
import { Icons, type IconNames } from '../Icons'
import { useNavigate } from 'react-router-dom'

export default function ModuleCard() {
  const navigate = useNavigate()
  const items: { icon: IconNames; title: string; path: string }[] = [
    {
      icon: 'IconUsers',
      title: '会员管理',
      path: '/member'
    },
    {
      icon: 'IconAlignBoxRightStretch',
      title: '账单管理',
      path: '/bill'
    }
  ]

  return (
    <Card>
      <div className="grid grid-cols-4 gap-2 py-2">
        {items.map((item) => {
          return (
            <div
              key={item.path}
              className="flex flex-col items-center gap-2"
              onClick={() => {
                navigate(item.path)
              }}
            >
              <div className="w-[50px] h-[50px] bg-primary/60 rounded-[18px] flex items-center justify-center">
                <Icons className="text-white size-[20px]" name={item.icon} />
              </div>
              <div className="text-xs text-zinc-800">{item.title}</div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
