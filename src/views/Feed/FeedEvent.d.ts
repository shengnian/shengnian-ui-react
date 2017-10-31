import * as React from 'react';

import { ShengnianShorthandItem } from '../..';
import { FeedContentProps } from './FeedContent';
import { FeedDateProps } from './FeedDate';
import { FeedLabelProps } from './FeedLabel';
import { FeedMetaProps } from './FeedMeta';
import { FeedSummaryProps } from './FeedSummary';
import {FeedExtraProps} from './FeedExtra';

export interface FeedEventProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for FeedContent. */
  content?: ShengnianShorthandItem<FeedContentProps>;

  /** Shorthand for FeedDate. */
  date?: ShengnianShorthandItem<FeedDateProps>;

  /** Shorthand for FeedExtra with images. */
  extraImages?: ShengnianShorthandItem<FeedExtraProps>;

  /** Shorthand for FeedExtra with content. */
  extraText?: ShengnianShorthandItem<FeedExtraProps>;

  /** An event can contain icon label. */
  icon?: ShengnianShorthandItem<FeedLabelProps>;

  /** An event can contain image label. */
  image?: ShengnianShorthandItem<FeedLabelProps>;

  /** Shorthand for FeedMeta. */
  meta?: ShengnianShorthandItem<FeedMetaProps>;

  /** Shorthand for FeedSummary. */
  summary?: ShengnianShorthandItem<FeedSummaryProps>;
}

declare const FeedEvent: React.StatelessComponent<FeedEventProps>;

export default FeedEvent;
