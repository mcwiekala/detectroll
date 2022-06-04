import styles from "./SearchBox.module.scss";
import { IoSend } from "react-icons/io5";
const SearchBox = () => {
  return (
    <div class={styles.searchBoxContainer}>
      <span class={styles.searchBoxAtIcon}>@</span>
      <input
        type="text"
        class={styles.searchBox}
        placeholder="twitter handle..."
      ></input>
      <IoSend class={styles.sendIcon} />
    </div>
  );
};
export default SearchBox;
