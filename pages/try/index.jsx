import Head from "next/head";
import styles from "./try.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Try() {
  const MAX = 528;
  const [value, setValue] = useState(128);

  const [isDark, setDark] = useState(false);
  return (
    <>
      <Head>
        <title>Try | Bamyan</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.container}
      >
        <div className={styles.controlsContainer}>
          <div className={styles.buttons}>
            <div style={{width: '25px', height: '25px', outline: !isDark ? "1px solid var(--brown)" : "0px", outlineOffset: "4px", backgroundColor: 'var(--light-brown)', borderRadius: '100px'}} onClick={() => setDark(false)}></div>
            <div style={{width: '25px', height: '25px', outline: isDark ? "1px solid var(--brown)" : "0px", outlineOffset: "4px", backgroundColor: 'var(--brown)', borderRadius: '100px'}} onClick={() => setDark(true)}></div>
          </div>
          <div className={styles.bamyan}>Bamyan</div>
          <div className={styles.range}>
            <div>
              {value}px
            </div>
            <input
              type="range"
              min="128"
              max={MAX}
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <input
            style={{ fontSize: `${value}px`, backgroundColor: isDark ? "var(--brown)" : "var(--light-brown)",  color: isDark ? "var(--light-brown)" : "var(--brown)"}}
            placeholder="Switch to the Arabic keyboard and type here"
            lang="ar"
            dir="rtl"
            type="text"
          />
        </div>
      </motion.div>
    </>
  );
}
