// components/InViewFadeSlide.js
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function InViewOpacitySlide({
  children,
  duration = 1,
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration, delay }}
      className="w-full flex justify-center"
    >
      {children}
    </motion.div>
  );
}
