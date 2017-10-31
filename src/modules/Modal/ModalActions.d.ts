import * as React from 'react';

import { ButtonProps } from '../../elements/Button';
import { ShengnianShorthandCollection, ShengnianShorthandContent } from '../..';

export interface ModalActionsProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Array of shorthand buttons. */
  actions?: ShengnianShorthandCollection<ButtonProps>;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: ShengnianShorthandContent;

  /**
   * onClick handler for an action. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onActionClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: ButtonProps) => void;
}

declare const ModalActions: React.ComponentClass<ModalActionsProps>;

export default ModalActions;
