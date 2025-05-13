
import React from 'react';
import { motion } from 'framer-motion';

type MotionProps = {
  children: React.ReactNode;
  [key: string]: any;
};

export const Motion = ({ children, ...props }: MotionProps) => {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  );
};
