import NavBar from '@/components/nav-bar'
import { useState } from 'react'
import { arrayMoveImmutable } from 'array-move'
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
import GoodsSortItem from '@/components/goods-sort-item'

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

export default function GoodsSort() {
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
      <NavBar>商品排序</NavBar>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.key)}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-[1px]">
            {items.map((item) => (
              <SortableItem key={item.key} id={item.key}>
                <GoodsSortItem />
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  )
}
