import styles from "./cave.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cave(props) {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  useEffect(() => {
    toggleSwitch();
  }, []);
  return (
    <motion.div
      layout
      data-isOn={isOn}
      transition={{duration: 2.5, delay: 1}}
      style={{
        borderRadius: `${props.radius} ${props.radius} 0 0`,
        width: props.width,
        zIndex: props.zIndex,
        left: props.left,
      }}
      className={styles.cave}
    ></motion.div>
  );
}

