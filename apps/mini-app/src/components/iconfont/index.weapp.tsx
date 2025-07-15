/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react'
import Taro from '@tarojs/taro'

export type IconNames =
  | 'arrow-right'
  | 'fanhui'
  | 'jia'
  | 'jian'
  | 'guanbi'
  | 'dingdan'
  | 'ziliao'
  | 'kefu'
  | 'dizhibu'
  | 'shezhi'
  | 'youhuiquan'
  | 'tab-bottom'
  | 'tab-left'
  | 'tab-top'
  | 'tab-right'
  | 'dianhua'
  | 'dingwei'
  | 'buoumao'
  | 'nainiumao'
  | 'jinmao'

interface Props {
  name: IconNames
  size?: number
  color?: string | string[]
  style?: React.CSSProperties
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props

  // @ts-ignore
  return (
    <iconfont
      name={name}
      size={parseFloat(Taro.pxTransform(size))}
      color={color}
      style={style}
    />
  )
}

IconFont.defaultProps = {
  size: 36,
}

export default IconFont
