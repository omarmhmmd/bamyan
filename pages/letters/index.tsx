import Head from "next/head";
import styles from "./letters.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import letters from "../../public/data/farsi.json";

export default function Glyphs() {
  const [letter, setLetter] = useState("ا");
  const handleClick = (event: any) => {
    setLetter(event.target.innerHTML);
  };
  return (
    <>
      <Head>
        <title>Letters | Bamyan</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.container}
      >
        <div className={styles.letterContainer}>
          <img src={`images/svg/${letter}.svg`} alt="" />
        </div>
        <div className={styles.glyphContainer}>
          <div className={styles.headerContainer}>
            {letters.farsi.map((farsi) =>
              letter === farsi.value ? (
                <div>
                  <p>{farsi.eng}</p>
                  <p>{farsi.farsi}</p>
                </div>
              ) : null
            )}
          </div>
          <div className={styles.glyphGrid}>
            {letters.farsi.map((farsi) => (
              <motion.div
                key={farsi.key}
                onMouseEnter={(event) => handleClick(event)}
                className={styles.glyph}
                whileHover={{
                  scale: 0.8,
                  transition: { duration: 0.35 },
                }}
              >
                {farsi.value}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
