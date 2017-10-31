import * as React from 'react';

import {
  ShengnianFLOATS,
  ShengnianShorthandContent,
  ShengnianShorthandItem,
  ShengnianVERTICALALIGNMENTS
} from '../..';
import { ListDescriptionProps } from './ListDescription';
import { ListHeaderProps } from './ListHeader';

export interface ListContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Shorthand for ListDescription. */
  description?: ShengnianShorthandItem<ListDescriptionProps>;

  /** An list content can be floated left or right. */
  floated?: ShengnianFLOATS;

  /** Shorthand for ListHeader. */
  header?: ShengnianShorthandItem<ListHeaderProps>;

  /** An element inside a list can be vertically aligned. */
  verticalAlign?: ShengnianVERTICALALIGNMENTS;
}

declare const ListContent: React.StatelessComponent<ListContentProps>;

export default ListContent;
