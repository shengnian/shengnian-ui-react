import * as React from 'react';

import { ShengnianShorthandContent, ShengnianShorthandItem } from '../..';
import { FeedDateProps } from './FeedDate';
import { FeedUserProps } from './FeedUser';

export interface FeedSummaryProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Shorthand for FeedDate. */
  date?: ShengnianShorthandItem<FeedDateProps>;

  /** Shorthand for FeedUser. */
  user?: ShengnianShorthandItem<FeedUserProps>;
}

declare const FeedSummary: React.StatelessComponent<FeedSummaryProps>;

export default FeedSummary;
