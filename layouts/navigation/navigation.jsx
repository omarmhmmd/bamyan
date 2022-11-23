import Cave from "../../components/cave/cave";
import styles from "./navigation.module.css";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 1 }}
      className={styles.navigation}
    >
      <Cave eng="info" farsi="اطلاعات" radius="25px" width="50px" zIndex="4" />
      <Cave eng="try" farsi="امتحان" radius="50px" width="100px" zIndex="3" />
      <Cave eng="glyphs" farsi="نشان" radius="25px" width="150px" zIndex="2" />
      <Cave eng="film" farsi="فلم" radius="25px" width="200px" zIndex="1" />
    </motion.div>
  );
}
