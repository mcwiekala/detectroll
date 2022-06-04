import styles from "./Bar.module.scss";

const Bar = ({ completed }) => {
  const higherScore = completed > 75;
  return (
    <div
      className={higherScore ? `${styles.bar} ${styles.barTroll}` : styles.bar}
    >
      <div
        className={
          higherScore
            ? `${styles.bar__line} ${styles.bar__lineTroll}`
            : styles.bar__line
        }
        style={{ width: `${completed}%` }}
      ></div>
    </div>
  );
};

export default Bar;
