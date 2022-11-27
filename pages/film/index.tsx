import Head from "next/head";
import styles from "./film.module.css";
import { motion } from "framer-motion";
import Vimeo from "@u-wave/react-vimeo";

export default function Film() {
  return (
    <>
      <Head>
        <title>Film | Bamyan</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.container}
      >
        <div className={styles.flex}>
          <div className={styles.video}>
            <Vimeo
              className={styles.vimeo}
              showTitle={false}
              showPortrait={false}
              showByline={false}
              video="246914053"
              autoplay
            />
          </div>
          <div className={styles.text}>
            <p>
              Bamyan is a typeface exploring the cultural history of the great
              Bamyan Valley of Afghanistan. - Omar
              Bamyan is a typeface exploring the cultural history of the great
              Bamyan is a typeface exploring the cultural history of the great
              Bamyan Valley of Afghanistan. - Omar
              Bamyan is a typeface exploring the cultural history of the great
              Bamyan is a typeface exploring the cultural history of the great
              Bamyan Valley of Afghanistan. - Omar
              Bamyan is a typeface exploring the cultural history of the great
              Bamyan is a typeface exploring the cultural history of the great
              Bamyan Valley of Afghanistan. - Omar
              Bamyan is a typeface exploring the cultural history of the great
              Bamyan is a typeface exploring the cultural history of the great
              Bamyan Valley of Afghanistan. - Omar
              Bamyan is a typeface exploring the cultural history of the great
              Bamyan is a typeface exploring the cultural history of the great
              Bamyan Valley of Afghanistan. - Omar
              Bamyan is a typeface exploring the cultural history of the great
            
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
