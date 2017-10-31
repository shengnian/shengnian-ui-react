import * as React from 'react';

import { ShengnianShorthandItem, ShengnianShorthandContent } from '../..';
import { StepDescriptionProps } from './StepDescription';
import { StepTitleProps } from './StepTitle';

export interface StepContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Shorthand for StepDescription. */
  description?: ShengnianShorthandItem<StepDescriptionProps>;

  /** Shorthand for StepTitle. */
  title?: ShengnianShorthandItem<StepTitleProps>;
}

declare const StepContent: React.StatelessComponent<StepContentProps>;

export default StepContent;
