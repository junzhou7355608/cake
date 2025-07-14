import Card from '@/components/ui/card'
import Cell from '@/components/ui/cell'

export interface OrderInfoCardProps {

}

export default function OrderInfoCard() {
  return (
    <Card>
      <Cell label="预约时间" value="2025-07-09 10:00"></Cell>
      <Cell label="预留电话" value="189****9282"></Cell>
    </Card>
  )
}
