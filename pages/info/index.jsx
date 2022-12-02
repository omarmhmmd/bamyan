import Head from "next/head";
import styles from "./info.module.css";
import Tag from "../../components/tag/tag";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <>
      <Head>
        <title>Info | Bamyan</title>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.container}
      >
        <div className={styles.blocks}>
          <div
            style={{
              gridColumnStart: "1",
              gridColumnEnd: "3",
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/b/be/Fran%C3%A7oise_Foliot_-_Afghanistan_-_006.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              border: "1px solid var(--brown)",
            }}
          ></div>
          <div
            style={{
              gridColumnStart: "3",
              gridColumnEnd: "7",
              fontFamily: "bamyan",
              fontSize: "16vw",
              backgroundColor: "var(--brown)",
              color: "var(--light-brown)",
              padding: "16px",
              lineHeight: "10vw",
              textAlign: "center",
              paddingBottom: "7vw",
            }}
          >
            افغانستان
          </div>
          <div
            style={{
              gridColumnStart: "1",
              gridColumnEnd: "3",
            }}
            className={styles.block1}
          >
            <div className={styles.header}>
              <Tag tag="Bamyan" />
              <Tag tag="باميان" />
            </div>
          </div>
          <div
            style={{
              gridColumnStart: "3",
              gridColumnEnd: "5",
            }}
            className={styles.block2}
          >
            {/* <img style={{ width: "128px" }} src="/images/ب.svg" alt="" /> */}
            <p
              style={{
                marginBottom: "0px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Bamyan
            </p>
            <p style={{ fontSize: "20px", marginBottom: "0px" }}>A Typeface</p>
            <p style={{ fontSize: "20px", marginBottom: "0px" }}>Designed by</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontFamily: "Farsi", fontWeight: "bold" }}>
                عمر محمد
              </p>{" "}
              <p style={{ marginLeft: "16px", fontWeight: "bold" }}>
                Omar Mohammad
              </p>
            </div>
            <Tag tag="Download Bamyan.otf"/>
          </div>
          <div
            style={{
              gridColumnStart: "5",
              gridColumnEnd: "7",
              fontFamily: "bamyan",
              fontSize: "16vw",
              backgroundColor: "",
              color: "var(--brown)",
              padding: "16px",
              textAlign: "center",
              height: "16vw",
              backgroundImage:
                "url(https://d2w9rnfcy7mm78.cloudfront.net/6554283/original_144b1101dde7c1c9a51e0c3fc54435c5.jpg?1584979785?bc=0)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
              backgroundPosition: "top",
              border: "1px solid var(--brown)",
            }}
          ></div>
          <div
            style={{
              gridColumnStart: "1",
              gridColumnEnd: "3",
              fontFamily: "bamyan",
              fontSize: "16vw",
              backgroundColor: "var(--brown)",
              color: "var(--light-brown)",
              padding: "16px",
              lineHeight: "12vw",
              textAlign: "center",
            }}
          >
            كابل
          </div>
          <div
            style={{
              gridColumnStart: "3",
              gridColumnEnd: "4",
              backgroundImage:
                "url(https://d2w9rnfcy7mm78.cloudfront.net/8172524/original_ae8964146b0d483bfafb00fdf9a0a2f8.jpg?1596066165?bc=0)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              border: "1px solid var(--brown)",
            }}
          ></div>
          <div
            style={{
              gridColumnStart: "4",
              gridColumnEnd: "7",
              fontFamily: "bamyan",
              fontSize: "20vw",
              backgroundColor: "var(--tan)",
              color: "var(--brown)",
              padding: "16px",
              lineHeight: "10vw",
              textAlign: "center",
              paddingBottom: "8vw",
            }}
          >
            باميان
          </div>
        </div>
      </motion.div>
    </>
  );
}
