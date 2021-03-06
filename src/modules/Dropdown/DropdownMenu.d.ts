import * as React from 'react';
import { ShengnianShorthandContent } from '../..';

export interface DropdownMenuProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** A dropdown menu can scroll. */
  scrolling?: boolean;
}

declare const DropdownMenu: React.StatelessComponent<DropdownMenuProps>;

export default DropdownMenu;
