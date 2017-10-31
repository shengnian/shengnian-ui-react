import * as React from 'react';
import {
  ShengnianCOLORS,
  ShengnianFLOATS,
  ShengnianTEXTALIGNMENTS,
  ShengnianVERTICALALIGNMENTS,
  ShengnianWIDTHS
} from '../..';

export type GridOnlyProp = string | 'computer' | 'largeScreen' | 'mobile' | 'tablet mobile' | 'tablet' | 'widescreen';

export interface GridColumnProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A grid column can be colored. */
  color?: ShengnianCOLORS;

  /** A column can specify a width for a computer. */
  computer?: ShengnianWIDTHS;

  /** A column can sit flush against the left or right edge of a row. */
  floated?: ShengnianFLOATS;

  /** A column can specify a width for a large screen device. */
  largeScreen?: ShengnianWIDTHS;

  /** A column can specify a width for a mobile device. */
  mobile?: ShengnianWIDTHS;

  /** A column can appear only for a specific device, or screen sizes. */
  only?: GridOnlyProp;

  /** An can stretch its contents to take up the entire grid or row height. */
  stretched?: boolean;

  /** A column can specify a width for a tablet device. */
  tablet?: ShengnianWIDTHS;

  /** A row can specify its text alignment. */
  textAlign?: ShengnianTEXTALIGNMENTS;

  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign?: ShengnianVERTICALALIGNMENTS;

  /** A column can specify a width for a wide screen device. */
  widescreen?: ShengnianWIDTHS;

  /** Represents width of column. */
  width?: ShengnianWIDTHS;
}

declare const GridColumn: React.StatelessComponent<GridColumnProps>;

export default GridColumn;
