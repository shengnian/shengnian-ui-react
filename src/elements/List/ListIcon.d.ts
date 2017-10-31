import * as React from 'react';

import { ShengnianVERTICALALIGNMENTS } from '../..';
import { IconProps } from '../Icon';

export interface ListIconProps extends IconProps {
  [key: string]: any;

  /** Additional classes. */
  className?: string;

  /** An element inside a list can be vertically aligned. */
  verticalAlign?: ShengnianVERTICALALIGNMENTS;
}

declare const ListIcon: React.StatelessComponent<ListIconProps>;

export default ListIcon;
