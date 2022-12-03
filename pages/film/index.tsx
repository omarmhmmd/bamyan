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
        
          <div className={styles.center}>
            <div className={styles.video}>
              <Vimeo
                className={styles.vimeo}
                showTitle={false}
                showPortrait={false}
                showByline={false}
                video="246914053"
                autoplay
              />
              {/* <img src="images/meta.png" alt="" /> */}
            </div>
            <div className={styles.info}>
              <div>
                <img src="images/film_logo.svg" alt="" />
                <div className={styles.pHeader}>
                  <p style={{paddingBottom: "4px"}}>Kabul, Afghanistan</p>
                  <p>November 29, 1984</p>
                </div>
              </div>
              <div className={styles.text}>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  <br />
                  <br />
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                  sit amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  <br />
                  <br />
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
              </div>
            </div>
          </div>
      </motion.div>
    </>
  );
}
