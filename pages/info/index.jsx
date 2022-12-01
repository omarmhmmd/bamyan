import Head from "next/head";
import styles from "./info.module.css";
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
              gridColumnEnd: "4",
              fontFamily: "bamyan",
              fontSize: "25vw",
              backgroundColor: "var(--brown)",
              color: "var(--light-brown)",
              lineHeight: "15vw",
              paddingBottom: "10vw",
              textAlign: "center",
            }}
          >
            باميان
          </div>
          <div
            style={{
              gridColumnStart: "4",
              gridColumnEnd: "5",
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/4/46/Buddha_of_Bamiyan.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              border: "1.5px solid var(--brown)",
            }}
          ></div>
          <div
            style={{
              gridColumnStart: "1",
              gridColumnEnd: "3",
              fontFamily: "bamyan",
              fontSize: "16px",
              backgroundColor: "var(--tan)",
              color: "var(--brown)",
              padding: "16px",
              // lineHeight: "15vw",
              // paddingBottom: "10vw",
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia
            <br />
            <br />
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum
            <br />
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum
            <br />
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum
            <br />
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum
            <br />
          </div>
          <div
            style={{
              gridColumnStart: "3",
              gridColumnEnd: "5",
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/4/46/Buddha_of_Bamiyan.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              border: "1.5px solid var(--brown)",
            }}
          ></div>
        </div>
      </motion.div>
    </>
  );
}
