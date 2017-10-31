import * as React from 'react';
import { ShengnianShorthandContent } from '../..';

export interface ItemDescriptionProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;
}

declare const ItemDescription: React.StatelessComponent<ItemDescriptionProps>;

export default ItemDescription;
