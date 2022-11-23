import Head from "next/head";
import styles from "./film.module.css";

export default function Film() {
  return (
    <>
      <Head>
        <title>Film | Bamyan</title>
      </Head>
      <div className={styles.container}>
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
    </>
  );
}
