import styles from "./SearchBox.module.scss";
import { IoSend } from "react-icons/io5";
import { useForm, useWatch } from "react-hook-form";
const SearchBox = () => {
  const { register, handleSubmit, watch } = useForm();
  const searchText = watch("searchBox");
  const onSubmit = () => {
    console.log(searchText);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} class={styles.searchBoxContainer}>
      {!searchText && <span class={styles.searchBoxAtIcon}>@</span>}
      <input
        type="text"
        class={styles.searchBox}
        placeholder="twitter handle..."
        {...register("searchBox")}
      ></input>
      {searchText && (
        <button type="submit" class={styles.sendIconContainer}>
          <IoSend class={styles.sendIcon} />
        </button>
      )}
    </form>
  );
};
export default SearchBox;
