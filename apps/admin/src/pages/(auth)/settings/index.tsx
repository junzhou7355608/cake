import ActionBar from '@/components/action-bar'
import NavBar from '@/components/nav-bar'
import { Button, Dialog, Toast } from 'antd-mobile'

export default function Settings() {
  return (
    <div>
      <NavBar>设置</NavBar>

      <ActionBar>
        <Button
          block
          onClick={() => {
            Dialog.confirm({
              content: '是否提交申请',
              onConfirm: async () => {
                await new Promise((resolve) => setTimeout(resolve, 3000))
                Toast.show({
                  icon: 'success',
                  content: '提交成功',
                  position: 'bottom'
                })
              }
            })
          }}
        >
          退出登录
        </Button>
      </ActionBar>
    </div>
  )
}
