import * as React from 'react';

import { ShengnianShorthandItem } from '../..';
import { ImageProps } from '../Image';
import { ListContentProps } from './ListContent';
import { ListDescriptionProps } from './ListDescription';
import { ListHeaderProps } from './ListHeader';
import { ListIconProps } from './ListIcon';

export interface ListItemProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A list item can active. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandItem<ListContentProps>;

  /** Shorthand for ListDescription. */
  description?: ShengnianShorthandItem<ListDescriptionProps>;

  /** A list item can disabled. */
  disabled?: boolean;

  /** Shorthand for ListHeader. */
  header?: ShengnianShorthandItem<ListHeaderProps>;

  /** Shorthand for ListIcon. */
  icon?: ShengnianShorthandItem<ListIconProps>;

  /** Shorthand for Image. */
  image?: ShengnianShorthandItem<ImageProps>;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: ListItemProps) => void;

  /** A value for an ordered list. */
  value?: string;
}

declare const ListItem: React.StatelessComponent<ListItemProps>;

export default ListItem;
