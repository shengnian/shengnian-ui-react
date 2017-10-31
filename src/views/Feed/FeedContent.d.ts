import * as React from 'react';

import { ShengnianShorthandContent, ShengnianShorthandItem } from '../..';
import { FeedDateProps } from './FeedDate';
import { FeedExtraProps } from './FeedExtra';
import { FeedMetaProps } from './FeedMeta';
import { FeedSummaryProps } from './FeedSummary';

export interface FeedContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** An event can contain a date. */
  date?: ShengnianShorthandItem<FeedDateProps>;

  /** Shorthand for FeedExtra with images. */
  extraImages?: ShengnianShorthandItem<FeedExtraProps>;

  /** Shorthand for FeedExtra with text. */
  extraText?: ShengnianShorthandItem<FeedExtraProps>;

  /** Shorthand for FeedMeta. */
  meta?: ShengnianShorthandItem<FeedMetaProps>;

  /** Shorthand for FeedSummary. */
  summary?: ShengnianShorthandItem<FeedSummaryProps>;
}

declare const FeedContent: React.StatelessComponent<FeedContentProps>;

export default FeedContent;
