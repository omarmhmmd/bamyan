import Cave from "../../components/cave/cave";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <Cave radius="25px" width="50px" zIndex="3" />
      <Cave radius="25px" width="100px" zIndex="2" />
      <Cave radius="25px" width="150px" zIndex="1" />
      <Cave radius="25px" width="200px" zIndex="0" />
    </div>
  );
}
