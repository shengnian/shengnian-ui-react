import * as React from 'react';

import {
  ShengnianCOLORS,
  ShengnianTEXTALIGNMENTS,
  ShengnianVERTICALALIGNMENTS,
  ShengnianWIDTHS
} from '../..';
import { GridReversedProp } from './Grid';
import { GridOnlyProp } from './GridColumn';

export interface GridRowProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A row can have its columns centered. */
  centered?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A grid row can be colored. */
  color?: ShengnianCOLORS;

  /** Represents column count per line in Row. */
  columns?: ShengnianWIDTHS | 'equal';

  /** A row can have dividers between its columns. */
  divided?: boolean;

  /** A row can appear only for a specific device, or screen sizes. */
  only?: GridOnlyProp;

  /** A  row can specify that its columns should reverse order at different device sizes. */
  reversed?: GridReversedProp;

  /** An can stretch its contents to take up the entire column height. */
  stretched?: boolean;

  /** A row can specify its text alignment. */
  textAlign?: ShengnianTEXTALIGNMENTS;

  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign?: ShengnianVERTICALALIGNMENTS;
}

declare const GridRow: React.StatelessComponent<GridRowProps>;

export default GridRow;
