import { Icons } from '@/components/Icons'
import { Card } from 'antd-mobile'

export default function Index() {
  return (
    <div className="p-3">
      <Card>
        <div>
          <Icons name="IconBrandBitbucketFilled" />
          会员管理
        </div>
      </Card>
    </div>
  )
}
