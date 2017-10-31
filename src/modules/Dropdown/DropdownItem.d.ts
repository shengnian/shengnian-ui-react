import * as React from 'react';

import {
  HtmlSpanProps,
  ShengnianShorthandContent,
  ShengnianShorthandItem
} from '../..';
import { FlagProps } from '../../elements/Flag';
import { IconProps } from '../../elements/Icon';
import { ImageProps } from '../../elements/Image';
import { LabelProps } from '../../elements/Label';

export interface DropdownItemProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Style as the currently chosen item. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /** Additional text with less emphasis. */
  description?: ShengnianShorthandItem<HtmlSpanProps>;

  /** A dropdown item can be disabled. */
  disabled?: boolean;

  /** Shorthand for Flag. */
  flag?: ShengnianShorthandItem<FlagProps>;

  /** Shorthand for Icon. */
  icon?: ShengnianShorthandItem<IconProps>;

  /** Shorthand for Image. */
  image?: ShengnianShorthandItem<ImageProps>;

  /** Shorthand for Label. */
  label?: ShengnianShorthandItem<LabelProps>;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>, data: DropdownItemProps) => void;

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected?: boolean;

  /** Display text. */
  text?: ShengnianShorthandContent;

  /** Stored value. */
  value?: number | string;
}

declare const DropdownItem: React.ComponentClass<DropdownItemProps>;

export default DropdownItem;
