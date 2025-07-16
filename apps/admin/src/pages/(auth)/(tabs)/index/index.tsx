import { Card } from 'antd-mobile'
import { Icon } from '@iconify/react'

export default function Index() {
  return (
    <div className="p-3">
      <Card>
        <div>
          <Icon icon="solar:add-square-linear" />
          会员管理
        </div>
      </Card>
    </div>
  )
}
