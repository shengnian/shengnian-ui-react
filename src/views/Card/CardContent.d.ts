import * as React from 'react';

import { ShengnianShorthandContent, ShengnianShorthandItem } from '../..';
import { CardDescriptionProps } from './CardDescription';
import { CardHeaderProps } from './CardHeader';
import { CardMetaProps } from './CardMeta';

export interface CardContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Shorthand for CardDescription. */
  description?: ShengnianShorthandItem<CardDescriptionProps>;

  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra?: boolean;

  /** Shorthand for CardHeader. */
  header?: ShengnianShorthandItem<CardHeaderProps>;

  /** Shorthand for CardMeta. */
  meta?: ShengnianShorthandItem<CardMetaProps>;

  /** A card content can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right';
}

declare const CardContent: React.StatelessComponent<CardContentProps>;

export default CardContent;
