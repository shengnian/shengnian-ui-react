import * as React from 'react';

import { ShengnianShorthandContent, ShengnianShorthandItem } from '../..';
import { FeedLikeProps } from './FeedLike';

export interface FeedMetaProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Shorthand for FeedLike. */
  like?: ShengnianShorthandItem<FeedLikeProps>;
}

declare const FeedMeta: React.StatelessComponent<FeedMetaProps>;

export default FeedMeta;
