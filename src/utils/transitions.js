export const transitions = [
  {
    id: 'fade',
    name: 'Fade',
    description: 'Smooth fade transition',
    ffmpegFilter: 'fade'
  },
  {
    id: 'slide-left',
    name: 'Slide Left',
    description: 'Slide to the left',
    ffmpegFilter: 'slideleft'
  },
  {
    id: 'slide-right',
    name: 'Slide Right',
    description: 'Slide to the right',
    ffmpegFilter: 'slideright'
  },
  {
    id: 'slide-up',
    name: 'Slide Up',
    description: 'Slide upward',
    ffmpegFilter: 'slideup'
  },
  {
    id: 'slide-down',
    name: 'Slide Down',
    description: 'Slide downward',
    ffmpegFilter: 'slidedown'
  },
  {
    id: 'wipe-left',
    name: 'Wipe Left',
    description: 'Wipe from right to left',
    ffmpegFilter: 'wipeleft'
  },
  {
    id: 'wipe-right',
    name: 'Wipe Right',
    description: 'Wipe from left to right',
    ffmpegFilter: 'wiperight'
  },
  {
    id: 'dissolve',
    name: 'Dissolve',
    description: 'Dissolve transition',
    ffmpegFilter: 'dissolve'
  },
  {
    id: 'none',
    name: 'None',
    description: 'No transition',
    ffmpegFilter: 'none'
  }
];

export const getTransitionById = (id) => {
  return transitions.find(t => t.id === id) || transitions[0];
};

export const defaultTransition = transitions[0];
