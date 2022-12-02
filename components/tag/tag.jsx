import styles from "./tag.module.css";

export default function Tag(props) {
  return(
  <div style={props.tag == "Bamyan" || props.tag == "Download Bamyan.otf"? { fontSize:'16px', fontFamily: 'Arial', fontWeight: "bold"} : {fontSize:'16px', fontFamily: 'Farsi'}} className={styles.tag}>
    {props.tag}
  </div>);
}
