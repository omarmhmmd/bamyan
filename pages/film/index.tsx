import Head from "next/head";
import styles from "./film.module.css";
import { motion } from "framer-motion";
import Vimeo from "@u-wave/react-vimeo";
import Link from "next/link";
import ReactPlayer from "react-player";

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
            <ReactPlayer controls={false} className={styles.vimeo} width="100%" height="100%" url="https://www.youtube.com/watch?v=UXvTwVBYa0Y" />
            {/* <Vimeo
              className={styles.vimeo}
              showTitle={false}
              showPortrait={false}
              showByline={false}
              video="785326960"
            /> */}
            {/* <img src="images/meta.png" alt="" /> */}
          </div>
          <div className={styles.info}>
            <div>
              <img src="images/film_logo.svg" alt="" />
              <div className={styles.pHeader}>
                <p style={{ paddingBottom: "4px" }}>Kabul, Afghanistan</p>
                <p>November 29, 1994</p>
              </div>
            </div>
            <div className={styles.text}>
              <p>
                Salaam, and thank you for watching this film. I&apos;m Omar
                Mohammad, a designer based in Kabul, Afghanistan. While studying
                Design at Kabul University, the reality that our country lacks a
                contemporary cultural design language in many fields, especially
                architecture and graphic design, was a constant constraint in my
                work and research. My main focus as a student and now as a
                professional is about contributing to the cultural design
                language of Afghanistan through personal and commercial work.
                <br />
                <br />
                My MFA thesis at university explored concepts surrounding the
                definition of Afghan design, the artifacts of Afghan design, and
                the history of Afghan design. Luckily the Ministry of
                Information & Culture was invited to the graduate exhibition
                show and took great notice of my work and research. The Ministry
                is currently searching for fresh thinkers and designers to
                contribute to government funded design projects. With the sudden
                western boom of tourism coming to the country, many of these
                projects are geared towards boosting the cultural tourism
                economy of Afghanistan.
                <br />
                <br />
                The Buddhas of Bamyan have been a mainstay for those in the
                academic fields of archaeology, religion, and anthropology, yet
                they have not been fully utilized as a means for drawing
                foreigners and tourists into the country. Some of my thesis work
                explored graphic and visual identities in regards to this
                beautiful region, activating forms in the valley and landscape
                into cultural pieces of graphic/visual output. The Minister of
                Information and Culture, Ibrahim Nevin, took notice of this work
                and commissioned me to design a project about Bamyan that
                incorporated the work from my thesis. A cartoonist and filmmaker
                himself, Minister Nevin requested the final artifact to be a
                short film highlighting the beauty and wonders of the Bamyan
                Valley and its Buddhas.
                <br />
                <br />
                The film includes original music, custom graphics and
                typography, and a personalized voiceover. I&apos;d like to thank
                my classmates, colleagues, and professors at Kabul University
                for their support throughout this project. It&apos;s not much,
                but it&apos;s a first step towards creating a cultural design
                language for Afghanistan.
                <br />
                <br />–{" "}
                <Link target="_blank" href="https://omarmhmmd.com/">
                  <span style={{ fontWeight: "bold" }}>omarmhmmd</span>
                  &nbsp;&nbsp;
                  <span style={{ fontFamily: "Farsi" }}>عمر محمد </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
