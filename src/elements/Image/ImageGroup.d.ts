import * as React from 'react';
import { ShengnianSIZES, ShengnianShorthandContent } from '../..';

export interface ImageGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** A group of images can be formatted to have the same size. */
  size?: ShengnianSIZES;
}

declare const ImageGroup: React.StatelessComponent<ImageGroupProps>;

export default ImageGroup;
