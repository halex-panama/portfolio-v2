export const slideIn = {
  right: {
    x: 50,
    opacity: 0,
  },
  left: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const scale = {
  init: (size: number) => ({
    opacity: 0,
    scale: size,
  }),
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
