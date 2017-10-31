import * as React from 'react';

import { ShengnianShorthandCollection } from '../..';
import { MessageItemProps } from './MessageItem';

export interface MessageListProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand Message.Items. */
  items?: ShengnianShorthandCollection<MessageItemProps>;
}

declare const MessageList: React.StatelessComponent<MessageListProps>;

export default MessageList;
