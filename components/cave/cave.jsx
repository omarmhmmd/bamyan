import styles from "./cave.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const leftItem = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: -8 },
};
const activeItemTop = {
  hidden: { opacity: 1, y: -8 },
  visible: { opacity: 1, y: -8 },
};
const activeItemBottom = {
  hidden: { opacity: 1, y: 4 },
  visible: { opacity: 1, y: 4 },
};
const rightItem = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 4 },
};

export default function Cave(props) {
  const router = useRouter();
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  useEffect(() => {
    toggleSwitch();
  }, []);
  return (
    <motion.div
      layout
      data-isOn={isOn}
      initial="hidden"
      whileHover="visible"
      exit="hidden"
      transition={{ duration: 3.5, delay: 1, type: "spring" }}
      className={styles.animContainer}
      style={{
        zIndex: props.zIndex,
      }}
    >
      <AnimatePresence>
        <Link
          href={props.eng}
          className={
            router.pathname === "/" + props.eng
              ? styles.caveContainer
              : styles.nonActive
          }
        >
          <motion.div
            variants={activeItemTop}
            transition={{ duration: 0.5 }}
            class="english"
            style={{
              textTransform: "capitalize",
            }}
          >
            {props.eng}
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            style={{
              borderRadius: `${props.radius} ${props.radius} 0 0`,
              width: props.width,
              zIndex: props.zIndex,
              left: props.left,
            }}
            className={styles.cave}
          ></motion.div>
          <motion.div
            variants={activeItemBottom}
            transition={{ duration: 0.5 }}
            class="farsi"
          >
            {props.farsi}
          </motion.div>
        </Link>
      </AnimatePresence>
      <Link
        href={props.eng}
        className={
          router.pathname != "/" + props.eng
            ? styles.caveContainer
            : styles.nonActive
        }
      >
        <motion.div
          variants={leftItem}
          transition={{ duration: 0.5 }}
          class="english"
          style={{
            textTransform: "capitalize",
          }}
        >
          {props.eng}
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          style={{
            borderRadius: `${props.radius} ${props.radius} 0 0`,
            width: props.width,
            zIndex: props.zIndex,
            left: props.left,
          }}
          className={styles.cave}
        ></motion.div>
        <motion.div
          variants={rightItem}
          transition={{ duration: 0.5 }}
          class="farsi"
        >
          {props.farsi}
        </motion.div>
      </Link>
    </motion.div>
  );
}
