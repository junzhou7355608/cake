import { Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

export default function GoodsTool() {
  const navigate = useNavigate()

  return (
    <div className="w-full md:w-[430px] fixed bottom-[var(--height-tabbar)] left-0 right-0 m-auto h-goods-tool bg-white flex justify-between items-center px-3 border-t border-gray-100 z-10">
      <Button
        size="mini"
        onClick={() => {
          navigate('/category')
        }}
      >
        分类管理
      </Button>
      <div className="flex gap-2">
        <Button
          size="mini"
          onClick={() => {
            navigate('/goods-sort')
          }}
        >
          排序管理
        </Button>
        <Button
          size="mini"
          onClick={() => {
            navigate('/goods-warehouse')
          }}
        >
          仓库管理
        </Button>
      </div>
    </div>
  )
}
