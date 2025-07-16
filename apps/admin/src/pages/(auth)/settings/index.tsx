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
              content: '确认退出登录吗？',
              onConfirm: async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                Toast.show('退出成功')
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
