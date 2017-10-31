import * as React from 'react';

import { ShengnianCOLORS, ShengnianShorthandCollection, ShengnianShorthandContent, ShengnianWIDTHS } from '../..';
import { StatisticProps, StatisticSizeProp } from './Statistic';

export interface StatisticGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A statistic group can be formatted to be different colors. */
  color?: ShengnianCOLORS;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** A statistic group can present its measurement horizontally. */
  horizontal?: boolean;

  /** A statistic group can present its measurement horizontally. */
  inverted?:boolean;

  /** Array of props for Statistic. */
  items?: ShengnianShorthandCollection<StatisticProps>;

  /** A statistic group can vary in size. */
  size?: StatisticSizeProp;

  /** A statistic group can have its items divided evenly. */
  widths?: ShengnianWIDTHS;
}

declare const StatisticGroup: React.StatelessComponent<StatisticGroupProps>;

export default StatisticGroup;
