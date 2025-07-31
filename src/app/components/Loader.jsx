'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-shimmer"
        >
          Constant Growth
        </motion.h1>

        <motion.div
          className="mt-6 w-12 h-12 border-4 border-t-transparent border-blue-500 border-r-purple-500 rounded-full animate-spin"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
