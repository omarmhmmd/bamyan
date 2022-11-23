import Navigation from "../navigation/navigation";
import styles from "./structure.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export default function Structure({ children }) {
  const router = useRouter();
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (router.asPath != "/") {
      setIsOn(true);
    }
  }, [router.asPath]);

  return (
    <motion.div
      layout
      data-isOn={isOn}
      className={styles.container}
    >
      <Navigation />
      <AnimatePresence>
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.childrenContainer}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
