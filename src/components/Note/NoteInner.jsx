import styles from "./NoteInner.module.scss";
function NoteInner({ useData, setUseData, useClick }) {
  return (
    <div className={`${styles.wrap} ${useClick ? styles.open : ""}`}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <h3>{useData.title}</h3>
          <button
            type="button"
            className="closeBtn"
            onClick={() => {
              setUseData(null);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.issue}>
          <p className={styles.innerTitle}>문제점</p>
          <p className={styles.innerDesc}>{useData.issue}</p>
          <div className={styles.imgBox}></div>
        </div>
        <div className={styles.approach}>
          <p className={styles.innerTitle}>해결 방식</p>
          <p className={styles.innerDesc}>{useData.approach}</p>
          <div className={styles.imgBox}></div>
        </div>
        <div className={styles.result}>
          <p className={styles.innerTitle}>결과</p>
          <p className={styles.innerDesc}>{useData.result}</p>
          <div className={styles.imgBox}></div>
        </div>
      </div>
    </div>
  );
}
export default NoteInner;
