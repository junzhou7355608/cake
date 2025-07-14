/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'arrow-right' | 'fanhui' | 'jia' | 'jian' | 'guanbi' | 'dingdan' | 'ziliao' | 'kefu' | 'dizhibu' | 'shezhi' | 'youhuiquan' | 'tab-bottom' | 'tab-left' | 'tab-top' | 'tab-right' | 'dianhua' | 'dingwei' | 'buoumao' | 'nainiumao' | 'jinmao';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
