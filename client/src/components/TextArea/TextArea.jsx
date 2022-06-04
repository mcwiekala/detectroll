import styles from "./TextArea.module.scss";
import { IoSend } from "react-icons/io5";
const TextArea = () => {
  return (
    <div class={styles.textAreaContainer}>
      <textarea
        class={styles.textArea}
        placeholder="type some text to check"
      ></textarea>
      <IoSend class={styles.sendIcon} />
    </div>
  );
};
export default TextArea;
