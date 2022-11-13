import styles from "./caves.module.css";

export default function Caves() {
  return (
    <>
      <div className={`english ${styles.test}`}>Bamyan</div>
      <div className={`farsi ${styles.test}`}>باميان</div>
      <div className={`bamyan-farsi ${styles.test}`}>باميان</div>
    </>
  );
}
