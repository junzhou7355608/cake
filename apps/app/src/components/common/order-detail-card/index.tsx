import Card from '@/components/ui/card'
import Cell from '@/components/ui/cell'

export interface OrderDetailCardProps {

}

export default function OrderDetailCard() {
  return (
    <Card>
      <Cell label="预约时间" value="2025-07-09 10:00"></Cell>
      <Cell label="预留电话" value="189****9282"></Cell>
      <Cell label="购买方式" value="到店自提"></Cell>
      <Cell label="订单编号" value="1234567890"></Cell>
      <Cell label="订单时间" value="2025-07-09 10:00"></Cell>
      <Cell label="订单金额" value="100.00"></Cell>
      <Cell label="订单备注" value="无"></Cell>
    </Card>
  )
}
