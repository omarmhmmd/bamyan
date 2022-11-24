import Head from "next/head";
import styles from "./film.module.css";
import { motion } from "framer-motion";

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
        <img src="https://picsum.photos/200/300" alt="" />
      </motion.div>
    </>
  );
}
