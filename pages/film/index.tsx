import Head from "next/head";
import styles from "./film.module.css";
import { motion } from "framer-motion";
import Vimeo from "@u-wave/react-vimeo";
import Link from 'next/link'

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
                <p style={{ paddingBottom: "4px" }}>Kabul, Afghanistan</p>
                <p>November 29, 1973</p>
              </div>
            </div>
            <div className={styles.text}>
              <p>
                Salaam, and thank you for watching this film. My name is Omar
                Mohammad. I am a designer based in Kabul, Afghanistan. Since
                graduating from Kabul University this summer, I have been
                working on contributing to the cultural design language of
                Afghanistan. While studying Graphic Design at Kabul University,
                I realized our country lacked a contemporary cultural design
                language in many fields, especially architecture and graphic
                design.
                <br />
                <br />
                My thesis at university related to concepts about what Afghan
                design is, what it looks like, and who its contributors are. The
                Ministry of Information & Culture was invited to the graduate
                exhibition show and took notice of my work and research. The
                Ministry is currently searching for fresh thinkers and designers
                to contribute to government funded design projects, at this
                point mostly in the realm of tourism. With the sudden boom of
                tourism to the country from the west, many of these projects are
                geared towards boosting the cultural tourism economy in
                Afghanistan.
                <br /> <br />
                The Buddhas of Bamyan have been a mainstay for those in the
                academic fields of archaeology, religion, and anthropology, yet
                they have not been utilized as a means for drawing foreigners
                and outsiders into the country. Some of my thesis work explored
                graphic and visual identities in regards to this region,
                activating forms in the valley and landscape into cultural
                pieces of graphic design. The Minister of Information and
                Culture himself, Ibrahim Nevin, took notice of this work and
                commissioned me to design a project about Bamyan that
                incorporated the work from my thesis. A cartoonist and
                filmmaker, Minister Nevin requested the final artifact to be a
                short film highlighting the beauty and
                wonders of the Bamyan Valley and its Buddhas.
                <br /> <br />
                The film includes original music, custom graphics and
                typography, and a personalized voiceover. It’s not much, but
                it's a first step towards creating a cultural design language
                for Afghanistan.
                <br /><br />
                – <Link target="_blank" href="https://omarmhmmd.com/">
                  <span style={{fontWeight:"bold"}}>omarmhmmd</span>&nbsp;&nbsp;
                  <span style={{fontFamily:"Farsi"}}>عمر محمد </span> 
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
