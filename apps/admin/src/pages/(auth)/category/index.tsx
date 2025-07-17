import ActionBar from '@/components/action-bar'
import NavBar from '@/components/nav-bar'
import { Button, List, SwipeAction } from 'antd-mobile'
import { useState } from 'react'
import { arrayMoveImmutable } from 'array-move'
import { Icons } from '@/components/Icons'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function Category() {
  const [items, setItems] = useState([
    {
      key: 'key1',
      title: '分类一'
    },
    {
      key: 'key2',
      title: '分类二'
    },
    {
      key: 'key3',
      title: '分类三'
    }
  ])

  // const onSortEnd = (oldIndex: number, newIndex: number) => {
  //   setItems(arrayMoveImmutable(items, oldIndex, newIndex))
  // }

  return (
    <div>
      <NavBar>分类管理</NavBar>
      <List mode="card">
        {items.map((item) => (
          <SwipeAction
            key={item.key}
            rightActions={[
              {
                key: 'delete',
                text: '删除',
                color: 'danger',
                onClick: () => {
                  console.log('delete')
                }
              }
            ]}
          >
            <List.Item prefix={<Icons name="IconBrandBitbucketFilled" />}>
              {item.title}
            </List.Item>
          </SwipeAction>
        ))}
      </List>

      <ActionBar>
        <Button block color="primary">
          新增分类
        </Button>
      </ActionBar>
    </div>
  )
}
