import * as React from 'react';

import { ShengnianShorthandContent, ShengnianShorthandItem } from '../..';
import { IconProps } from '../../elements/Icon';

export interface FeedLikeProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Shorthand for icon. Mutually exclusive with children. */
  icon?: ShengnianShorthandItem<IconProps>;
}

declare const FeedLike: React.StatelessComponent<FeedLikeProps>;

export default FeedLike;
