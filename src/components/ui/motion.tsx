
import React from 'react';
import { motion, MotionProps as FramerMotionProps } from 'framer-motion';

// Animation presets for consistent usage
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const slideIn = {
  left: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  right: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  up: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  down: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
};

export const stagger = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3 },
  },
};

type MotionProps = FramerMotionProps & {
  children: React.ReactNode;
  [key: string]: any;
};

export const Motion = ({ children, ...props }: MotionProps) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// For more advanced animations like stagger effects
export const MotionContainer = ({ children, ...props }: MotionProps) => {
  return (
    <motion.div
      variants={stagger.container}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MotionItem = ({ children, ...props }: MotionProps) => {
  return (
    <motion.div
      variants={stagger.item}
      {...props}
    >
      {children}
    </motion.div>
  );
};
