export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 50,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

  export const staggerContainer = () => ({
    hidden: { opacity: 0, scale: 0},
    show: {
        opacity: 1,
        scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        type: "spring",
        stiffness: 260,
      },
    },
  });
  
  export const textVariant = (delay) => ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: '',
        duration: 0.5,
        delay,
      },
    },
  });