import * as React from 'react';
import { ShengnianCOLORS, ShengnianShorthandContent, ShengnianSIZES } from '../..';

export interface LabelGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Labels can share shapes. */
  circular?: boolean;

  /** Additional classes. */
  className?: string;

  /** Label group can share colors together. */
  color?: ShengnianCOLORS;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Label group can share sizes together. */
  size?: ShengnianSIZES;

  /** Label group can share tag formatting. */
  tag?: boolean;
}

declare const LabelGroup: React.StatelessComponent<LabelGroupProps>;

export default LabelGroup;
