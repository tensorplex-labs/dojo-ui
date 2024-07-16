export interface ConversationBubbleProps {
  text?: string;
  actor?: string;
  isRightAligned?: boolean;
  gradientClass?: string;
}

export type AnimStateType = 'hide' | 'show';

export interface ConversationListProps {
  animState: string;
}

export interface LinearScaleProps {
  animState: string;
}

export interface KeyVisualProps {
  animState: string;
}
