import * as React from 'react';

import { ShengnianShorthandCollection, ShengnianShorthandContent, ShengnianWIDTHS } from '../..';
import { CardProps } from './Card';

export interface CardGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** A group of cards can double its column width for mobile. */
  doubling?: boolean;

  /** Shorthand array of props for Card. */
  items?: ShengnianShorthandCollection<CardProps>;

  /** A group of cards can set how many cards should exist in a row. */
  itemsPerRow?: ShengnianWIDTHS;

  /** A group of cards can automatically stack rows to a single columns on mobile devices. */
  stackable?: boolean;

  /** A card group can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right';
}

declare const CardGroup: React.StatelessComponent<CardGroupProps>;

export default CardGroup;
