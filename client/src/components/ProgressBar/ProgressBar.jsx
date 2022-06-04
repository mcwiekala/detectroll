import styles from "./ProgressBar.module.scss";
import Bar from "../Bar/Bar.jsx";

const ProgressBar = ({ data }) => {
  return (
    <div className={styles.progressBar}>
      {data.map(({ name, value }) => {
        return (
          <div key={name} className={styles.progressBar__container}>
            <span className={styles.progressBar__title}>
              {name.toLowerCase()}
            </span>
            <Bar completed={value * 100} />
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
