import { easeOut } from 'framer-motion';

export const elemAnimParentVariant = {
  hide: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export const elemAnimVariant = {
  hide: {
    y: '100%',
    opacity: 0,
  },
  show: {
    y: '0%',
    opacity: 1,
    transition: {
      ease: easeOut,
      duration: 0.4,
    },
  },
};

export const kvAnimVariant = {
  hide: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
    },
  },
};

export const staggeredFadeInParent = {
  hide: {},
  show: {
    transition: {
      delayChildren: 0.85,
      staggerChildren: 0.1,
    },
  },
};

export const staggeredFadeInChildren = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const staggeredFadeInMarkerParent = {
  hide: {},
  show: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

export const staggeredFadeInMarker = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const trackAnimVariant = {
  hide: {
    scaleX: 0,
  },
  show: {
    scaleX: 1,
    transition: {
      delay: 0.7,
      duration: 1,
    },
  },
};

export const buttonAnimVariant = {
  hide: {
    scale: 0.2,
    opacity: 0,
    y: 100,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 1,
    transition: {
      delay: 1,
      duration: 0.3,
    },
  },
};

export const taskCriteria = {
  multiSelect: 'multi-select',
  ranking: 'ranking',
  score: 'score',
};

export const KEY_MESSAGE_SCROLL_HEIGHT = 800;

export const ALL_CATEGORY = 'all';
