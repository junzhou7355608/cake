import { Icons } from '@/components/Icons'
import NavBar from '@/components/nav-bar'
import { Card } from 'antd-mobile'

export default function Index() {
  return (
    <div>
      <NavBar backIcon={false}>首页</NavBar>

      <div className="p-3 flex flex-col gap-2">
        <Card>
          <div>
            <Icons name="IconBrandBitbucketFilled" />
            会员管理
          </div>
        </Card>
        <Card>
          <div>
            <Icons name="IconBrandBitbucketFilled" />
            账单管理
          </div>
        </Card>
      </div>
    </div>
  )
}
