import * as React from 'react';
import { ShengnianShorthandContent } from '../..';

export interface MenuMenuProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** A sub menu can take left or right position. */
  position?: 'left' | 'right';
}

declare const MenuMenu: React.StatelessComponent<MenuMenuProps>;

export default MenuMenu;
