import * as React from 'react';

import {
  ShengnianCOLORS,
  ShengnianFLOATS,
  ShengnianShorthandContent
} from '../..';
import { default as StatisticGroup } from './StatisticGroup';
import { default as StatisticLabel } from './StatisticLabel';
import { default as StatisticValue } from './StatisticValue';

export type StatisticSizeProp = 'mini' | 'tiny' | 'small' | 'large' | 'huge';

export interface StatisticProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A statistic can be formatted to be different colors. */
  color?: ShengnianCOLORS;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** A statistic can sit to the left or right of other content. */
  floated?: ShengnianFLOATS;

  /** A statistic can present its measurement horizontally. */
  horizontal?: boolean;

  /** A statistic can be formatted to fit on a dark background. */
  inverted?: boolean;

  /** Label content of the Statistic. */
  label?: ShengnianShorthandContent;

  /** A statistic can vary in size. */
  size?: StatisticSizeProp;

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text?: boolean;

  /** Value content of the Statistic. */
  value?: ShengnianShorthandContent;
}

interface StatisticComponent extends React.StatelessComponent<StatisticProps> {
  Group: typeof StatisticGroup;
  Label: typeof StatisticLabel;
  Value: typeof StatisticValue;
}

declare const Statistic: StatisticComponent;

export default Statistic;
