import * as React from 'react';

import { ShengnianShorthandContent, ShengnianShorthandItem } from '../..';
import { IconProps } from '../../elements/Icon';

export interface DropdownHeaderProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Shorthand for Icon. */
  icon?: ShengnianShorthandItem<IconProps>;
}

declare const DropdownHeader: React.ComponentClass<DropdownHeaderProps>;

export default DropdownHeader;
