// components/InViewFadeSlide.js
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function InViewFadeSlide({
  children,
  duration = 1.5,
  delay = 0,
  direction = "left",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? "-100%" : "100%" }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration, delay }}
      className="w-full flex justify-center"
    >
      {children}
    </motion.div>
  );
}
