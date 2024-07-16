import { staggeredFadeInMarkerParent } from '@/constants';
import { ConversationListProps } from '@/types/HomePageTypes';
import { motion } from 'framer-motion';
import React from 'react';
import ConversationBubble from '../../../ConversationBubble';
import styles from './styles.module.css';

const conversations = [
  {
    text: 'Decentralized AI can democratize access and enhance privacy. Thoughts?',
    actor: 'J',
    isRightAligned: false,
    gradientClass: styles.actorGradient1,
  },
  {
    text: 'Yea! It also reduces the risk of data breaches by eliminating single points of control.',
    actor: 'D',
    isRightAligned: true,
    gradientClass: styles.actorGradient2,
  },
  {
    text: 'Open collaboration in decentralized AI can drive faster innovation.',
    actor: 'J',
    isRightAligned: false,
    gradientClass: styles.actorGradient1,
  },
  {
    text: "Agreed. Let's integrate it into our projects for a competitive edge and ethical alignment.",
    actor: 'D',
    isRightAligned: true,
    gradientClass: styles.actorGradient2,
  },
];

const ConversationList: React.FC<ConversationListProps> = ({ animState }) => (
  <motion.div
    variants={staggeredFadeInMarkerParent}
    initial="hide"
    animate={animState}
    className={`flex max-h-[300px] w-full flex-col gap-5 overflow-hidden rounded-t-2xl border-2 border-solid border-black p-4 ${styles.cardBgGradient}`}
  >
    {conversations.map((conversation, index) => (
      <ConversationBubble
        key={index}
        text={conversation.text}
        actor={conversation.actor}
        isRightAligned={conversation.isRightAligned}
        gradientClass={conversation.gradientClass}
      />
    ))}
  </motion.div>
);

export default ConversationList;
