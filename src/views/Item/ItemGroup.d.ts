import * as React from 'react';

import { ShengnianShorthandCollection, ShengnianShorthandContent } from '../..';
import { ItemProps } from './Item';

export interface ItemGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Items can be divided to better distinguish between grouped content. */
  divided?: boolean;

  /** Shorthand array of props for Item. */
  items?: ShengnianShorthandCollection<ItemProps>;

  /** An item can be formatted so that the entire contents link to another page. */
  link?: boolean;

  /** A group of items can relax its padding to provide more negative space. */
  relaxed?: boolean | 'very';

  /** Prevent items from stacking on mobile. */
  unstackable?: boolean;
}

declare const ItemGroup: React.StatelessComponent<ItemGroupProps>;

export default ItemGroup;