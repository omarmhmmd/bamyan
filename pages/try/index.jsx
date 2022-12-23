import Head from "next/head";
import styles from "./try.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Try() {
  const MAX = 528;
  const [size, setSize] = useState(128);
  const [lineHeight, setLineHeight] = useState(100);
  const [isDark, setDark] = useState(true);
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
        {/* <motion.div
        exit={{ opacity:0 }}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration: 10 }}

          className={styles.popUp}
        >
          Apple menu {'>'} System Settings {'>'} Keyboard {'>'} Input Sources {'>'} Arabic - QWERTY {'>'} Add
        </motion.div> */}
        <div className={styles.controlsContainer}>
          <div className={styles.bamyan}>Bamyan</div>
          <div className={styles.buttons}>
            <div
              style={{
                width: "25px",
                height: "25px",
                outline: !isDark ? "1px solid var(--brown)" : "0px",
                outlineOffset: "4px",
                backgroundColor: "var(--light-brown)",
                borderRadius: "100px",
              }}
              onClick={() => setDark(false)}
            ></div>
            <div
              style={{
                width: "25px",
                height: "25px",
                outline: isDark ? "1px solid var(--brown)" : "0px",
                outlineOffset: "4px",
                backgroundColor: "var(--brown)",
                borderRadius: "100px",
              }}
              onClick={() => setDark(true)}
            ></div>
          </div>
          <div className={styles.range}>
            <div className={styles.uiPadding}>Line Height</div>
            <input
              type="range"
              min="25"
              max="100"
              onChange={(e) => setLineHeight(e.target.value)}
              value={lineHeight}
            />
            <div className={styles.uiPadding}>{lineHeight}%</div>
          </div>
          <div className={styles.range}>
            <div className={styles.uiPadding}>Font Size</div>
            <input
              type="range"
              min="128"
              max={MAX}
              onChange={(e) => setSize(e.target.value)}
              value={size}
            />
            <div className={styles.uiPadding}>{size}px</div>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <textarea
            spellcheck="false"
            style={{
              fontSize: `${size}px`,
              lineHeight: `${lineHeight}%`,
              backgroundColor: isDark ? "var(--brown)" : "var(--light-brown)",
              color: isDark ? "var(--light-brown)" : "var(--brown)",
            }}
            // placeholder="باميان"
            lang="ar"
            dir="rtl"
            type="text"
          >
            اين حروف باميان است.
          </textarea>
        </div>
      </motion.div>
    </>
  );
}
