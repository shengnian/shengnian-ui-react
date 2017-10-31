import * as React from 'react';

import { ShengnianShorthandContent, ShengnianShorthandItem } from '../..';
import { default as ItemContent } from './ItemContent';
import { default as ItemDescription, ItemDescriptionProps } from './ItemDescription';
import { default as ItemExtra, ItemExtraProps} from './ItemExtra';
import { default as ItemGroup } from './ItemGroup';
import { default as ItemHeader, ItemHeaderProps } from './ItemHeader';
import { default as ItemImage, ItemImageProps } from './ItemImage';
import { default as ItemMeta, ItemMetaProps } from './ItemMeta';

export interface ItemProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for ItemContent component. */
  content?: ShengnianShorthandContent;

  /** Shorthand for ItemDescription component. */
  description?: ShengnianShorthandItem<ItemDescriptionProps>;

  /** Shorthand for ItemExtra component. */
  extra?: ShengnianShorthandItem<ItemExtraProps>;

  /** Shorthand for ItemHeader component. */
  header?: ShengnianShorthandItem<ItemHeaderProps>;

  /** Shorthand for ItemImage component. */
  image?: ShengnianShorthandItem<ItemImageProps>;

  /** Shorthand for ItemMeta component. */
  meta?: ShengnianShorthandItem<ItemMetaProps>;
}

interface ItemComponent extends React.StatelessComponent<ItemProps> {
  Content: typeof ItemContent;
  Description: typeof ItemDescription;
  Extra: typeof ItemExtra;
  Group: typeof ItemGroup;
  Header: typeof ItemHeader;
  Image: typeof ItemImage;
  Meta: typeof ItemMeta;
}

declare const Item: ItemComponent;

export default Item;
