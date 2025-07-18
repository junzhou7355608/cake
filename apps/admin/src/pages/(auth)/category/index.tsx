import ActionBar from '@/components/action-bar'
import NavBar from '@/components/nav-bar'
import { Button, Card } from 'antd-mobile'
import { useState } from 'react'
import { arrayMoveImmutable } from 'array-move'
import { Icons } from '@/components/Icons'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent
} from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function SortableItem({
  id,
  children
}: {
  id: string
  children: React.ReactNode
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
    background: isDragging ? '#f5f5f5' : undefined
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

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

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5
      }
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.key === active.id)
      const newIndex = items.findIndex((item) => item.key === over?.id)
      setItems(arrayMoveImmutable(items, oldIndex, newIndex))
    }
  }

  return (
    <div>
      <NavBar>分类管理</NavBar>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.key)}
          strategy={verticalListSortingStrategy}
        >
          <div className="p-3 flex flex-col gap-2">
            {items.map((item) => (
              <SortableItem key={item.key} id={item.key}>
                <Card className="touch-none select-none ">
                  <div className="flex items-center justify-between">
                    <Icons className="size-[18px]" name="IconGripVertical" />
                    <div className="flex-1 text-base font-medium pl-2">
                      {item.title}
                    </div>
                    <div className="flex items-center gap-1">
                      <Button size="mini" fill="none">
                        <Icons className="size-[18px]" name="IconEdit" />
                      </Button>
                      <Button size="mini" color="danger" fill="none">
                        <Icons className="size-[18px]" name="IconTrash" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <ActionBar>
        <Button block color="primary">
          新增分类
        </Button>
      </ActionBar>
    </div>
  )
}
