import * as React from 'react';
import { ShengnianShorthandContent } from '../..';

export interface CommentContentProps {
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

declare const CommentContent: React.StatelessComponent<CommentContentProps>;

export default CommentContent;
