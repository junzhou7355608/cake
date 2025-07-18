import NavBar from '@/components/nav-bar'
import { List, Image } from 'antd-mobile'

export default function Member() {
  const users = [
    {
      id: '1',
      avatar:
        'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '张小明',
      description: '普通会员，经常购买蛋糕类商品'
    },
    {
      id: '2',
      avatar:
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: '李小红',
      description: 'VIP会员，喜欢尝试新品'
    },
    {
      id: '3',
      avatar:
        'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '王大力',
      description: '企业客户，定期批量采购'
    },
    {
      id: '4',
      avatar:
        'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '陈美丽',
      description: '新注册用户，对甜点很感兴趣'
    },
    {
      id: '5',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '刘志强',
      description: '金牌会员，消费金额较高'
    },
    {
      id: '6',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '赵雅琪',
      description: '生日蛋糕专用户，每年都订制'
    },
    {
      id: '7',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '孙建国',
      description: '咖啡厅老板，长期合作客户'
    },
    {
      id: '8',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '周美玲',
      description: '家庭主妇，喜欢烘焙DIY'
    },
    {
      id: '9',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '吴志明',
      description: '公司采购，团购订单较多'
    },
    {
      id: '10',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '郑小雨',
      description: '学生党，偶尔购买小甜点'
    },
    {
      id: '11',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '林志豪',
      description: '健身达人，偏好低糖健康甜点'
    },
    {
      id: '12',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '黄思思',
      description: '网红博主，经常分享美食照片'
    },
    {
      id: '13',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '马文博',
      description: '程序员，深夜加班常点外卖'
    },
    {
      id: '14',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '徐雅琴',
      description: '幼儿园老师，经常为小朋友买蛋糕'
    },
    {
      id: '15',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '何志远',
      description: '退休教师，喜欢传统口味'
    },
    {
      id: '16',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '杨小婷',
      description: '大学生，宿舍聚会常买甜点'
    },
    {
      id: '17',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '朱建国',
      description: '快递员，工作间隙买小点心'
    },
    {
      id: '18',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '范丽华',
      description: '美容院老板，员工生日都订蛋糕'
    },
    {
      id: '19',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '董志强',
      description: '外卖骑手，经常帮客户代买'
    },
    {
      id: '20',
      avatar:
        'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: '韩雪梅',
      description: '全职妈妈，孩子生日必买蛋糕'
    }
  ]
  return (
    <div>
      <NavBar>会员管理</NavBar>
      <List>
        {users.map((user) => (
          <List.Item
            key={user.name}
            prefix={
              <Image
                src={user.avatar}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={user.description}
            onClick={() => {}}
          >
            {user.name}
          </List.Item>
        ))}
      </List>
    </div>
  )
}
