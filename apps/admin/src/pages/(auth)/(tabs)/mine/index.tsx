import { Avatar, List } from 'antd-mobile'
import { SetOutline, SmileOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import bg from '@/assets/images/banner.jpeg'

export default function Mine() {
  const navigate = useNavigate()
  return (
    <div>
      <div
        className="w-full h-[220px] relative flex items-end p-3 gap-2"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top'
        }}
      >
        <div className="flex items-center gap-2">
          <Avatar src="" />
          <div className="flex flex-col justify-between gap-1">
            <div className="text-base font-medium text-white">管理员</div>
            <div className="text-xs text-white/80">189****9282</div>
          </div>
        </div>
      </div>
      <List>
        <List.Item prefix={<SmileOutline />} onClick={() => {}}>
          关于
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
