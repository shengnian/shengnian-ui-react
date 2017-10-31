import * as React from 'react';

import { ShengnianShorthandContent } from '../..';
import { IconSizeProp } from './Icon';

export interface IconGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Size of the icon group. */
  size?: IconSizeProp;
}

declare const IconGroup: React.StatelessComponent<IconGroupProps>;

export default IconGroup;
