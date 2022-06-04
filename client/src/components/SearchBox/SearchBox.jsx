import styles from "./SearchBox.module.scss";
const SearchBox = () => {
  return (
    <div class={styles.searchBoxContainer}>
      <span class={styles.searchBoxAtIcon}>@</span>
      <input
        type="text"
        class={styles.searchBox}
        placeholder="twitter handle..."
      ></input>
    </div>
  );
};
export default SearchBox;
