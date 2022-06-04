import { Line } from "rc-progress";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ data }) => {
  const defaultColor = {
    strokeColor: "#D28254",
    trailColor: "rgba(210, 130, 84, 0.3)",
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <div className={styles.progressBar__container}>
            <span className={styles.progressBar__title}>{item.name}</span>
            <Line
              percent={item.value * 100}
              strokeWidth={1}
              strokeColor={defaultColor.strokeColor}
              trailColor={defaultColor.trailColor}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
