import { EtheralShadow } from '@/components/etheral-shadow'
import NavBar from '@/components/nav-bar'
import { Avatar, List } from 'antd-mobile'
import { SetOutline, UnorderedListOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

export default function Mine() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="w-full h-[220px] bg-white relative">
        <EtheralShadow
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
        <div className="absolute top-0 left-0 w-full h-full p-3 flex items-end">
          <div className="flex items-center gap-2">
            <Avatar src={'1'} />
            <div className="flex flex-col justify-between">
              <div className="text-lg font-bold">管理员</div>
              <div className="text-sm text-zinc-800">189****9282</div>
            </div>
          </div>
        </div>
      </div>
      <List mode="card">
        <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
          账单
        </List.Item>
        <List.Item
          prefix={<SetOutline />}
          onClick={() => {
            navigate('/settings')
          }}
        >
          设置
        </List.Item>
      </List>
    </div>
  )
}
