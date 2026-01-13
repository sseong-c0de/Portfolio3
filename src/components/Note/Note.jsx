import styles from "./Note.module.scss";
import noteData from "../../data/note";
import NoteInner from "./noteInner";
import { useState } from "react";
function Note() {
  const [useData, setUseData] = useState(null);
  const [useClick, setUseClick] = useState(false);
  return (
    <section id="Note" className={styles.note}>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>노트</h2>
          <p className={styles.titleDesc}>
            작은 시도를 통해 더 나은 방식으로 발전하고 있습니다.
          </p>
        </div>
        <div className={styles.btnWrap}>
          {noteData.map((data, index) => {
            return (
              <div key={index} className={styles.mapWrap}>
                <button
                  type="button"
                  className={`${styles.mapBtn} ${useClick ? styles.open : ""} ${
                    useData === null ? styles.return : ""
                  }`}
                  onClick={() => {
                    if (useData?.id === data.id) {
                      setUseData(null);
                      setUseClick(false);
                    } else {
                      setUseData(data);
                      setUseClick(true);
                    }
                  }}
                >
                  <h3>{data.title} </h3>
                  <p>{data.desc}</p>
                  <span>해결 방식 &gt;</span>
                </button>
                {useClick && useData?.id === data.id && (
                  <NoteInner
                    useData={useData}
                    setUseData={setUseData}
                    useClick={useClick}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Note;
