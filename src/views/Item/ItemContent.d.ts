import * as React from 'react';

import {
  ShengnianShorthandContent,
  ShengnianShorthandItem,
  ShengnianVERTICALALIGNMENTS
} from '../..';
import { ItemDescriptionProps } from './ItemDescription';
import { ItemExtraProps } from './ItemExtra';
import { ItemHeaderProps } from './ItemHeader';
import { ItemMetaProps } from './ItemMeta';

export interface ItemContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Shorthand for ItemDescription component. */
  description?: ShengnianShorthandItem<ItemDescriptionProps>;

  /** Shorthand for ItemExtra component. */
  extra?: ShengnianShorthandItem<ItemExtraProps>;

  /** Shorthand for ItemHeader component. */
  header?: ShengnianShorthandItem<ItemHeaderProps>;

  /** Shorthand for ItemMeta component. */
  meta?: ShengnianShorthandItem<ItemMetaProps>;

  /** Content can specify its vertical alignment. */
  verticalAlign?: ShengnianVERTICALALIGNMENTS;
}

declare const ItemContent: React.ComponentClass<ItemContentProps>;

export default ItemContent;
