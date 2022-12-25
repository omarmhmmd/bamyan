import Head from "next/head";
import React from "react";
import styles from "./try.module.css";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Try() {
  const MAX = 528;
  const [size, setSize] = useState(128);
  const [lineHeight, setLineHeight] = useState(100);
  const [isDark, setDark] = useState(true);
  const [show, setShow] = useState(false);

  const Btn = (props) => {
    return (
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="btn-hover"
        style={{
          fontFamily: "arial",
          border: "1px solid #3C3731",
          fontWeight: "bold",
          borderRadius: "8px",
          color: props.color,
          padding: "8px",
          marginLeft: props.margin,
          backgroundColor: props.bgColor,
        }}
      >
        {props.confirm}
      </motion.div>
    );
  };
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
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{
                top: "125%",
                // left: "50%",
                // transform: "translate(-50%, -50%)",
              }}
              animate={{
                top: "50%",
                // left: "50%",
                // transform: "translate(-50%, -50%)",
                transition: {
                  ease: "easeInOut",
                  type: "spring",
                  // delay: 1,
                  duration: 3,
                },
              }}
              exit={{
                top: "125%",
                // left: "50%",
                // transform: "translate(-50%, -50%)",
                transition: {
                  ease: "easeInOut",
                  type: "spring",
                  delay: 0,
                  duration: 3,
                },
              }}
              className={styles.popUp}
            >
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Message
              </span>
              <span style={{ fontWeight: "none", textTransform: "none" }}>
                Salaam! To type in Farsi you will need to add the 'Arabic -
                QWERTY' keyboard to your input sources and then switch to it.
              </span>
              <br />
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Guide
              </span>
              <span style={{ fontWeight: "none" }}>
                System Settings {">"} Keyboard {">"} Input
                Sources {">"} Arabic - QWERTY {">"} Add
              </span>
              <br />
              <div
                style={{
                  width: "100%",
                  backgroundColor: "none",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <a style={{ cursor: "pointer" }} onClick={() => setShow(false)}>
                  <Btn bgColor="#3C3731" color="#8F8679" confirm="Continue" />
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  target="_blank"
                  href="https://support.apple.com/guide/mac-help/write-in-another-language-on-mac-mchlp1406/mac"
                >
                  <Btn margin="16px" bgColor="#8F8679" color="#3C3731" confirm="More help" />
                </a>
              </div>
              {/* <div style={{width:"25vw"}}><img style={{width: "100%"}} src="images/arabic-keyboard.png" alt="" /></div> */}
            </motion.div>
          )}
        </AnimatePresence>
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
          <a style={{ cursor: "pointer" }} onClick={() => setShow(true)}>
            <Btn color="#3C3731" bgColor="#7f7769"  confirm="? Help" />
          </a>
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
