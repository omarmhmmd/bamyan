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
    <motion.div data-isOn={isOn} className={styles.container}>
      <Navigation />
      <AnimatePresence>
        <motion.div
          data-isOn={isOn}
          className={styles.childrenContainer}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
