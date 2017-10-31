import * as React from 'react';
import { ShengnianShorthandContent } from '../..';

export interface SidebarPusherProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Controls whether or not the dim is displayed. */
  dimmed?: boolean;
}

declare const SidebarPusher: React.StatelessComponent<SidebarPusherProps>;

export default SidebarPusher;
