import { useState } from "react";
import styles from "./Experience.module.scss";

function Experience() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>경력 사항</h2>
          <p className={styles.titleDesc}>아래의 기술들을 사용이 가능합니다.</p>
        </div>
        <ul className={styles.cardWrap}>
          <li className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.company}>(주)코멕스카본</h3>
              <span className={styles.period}>2019.07 ~ 2023.11</span>
            </div>
            <div className={styles.cardBtn}>
              <button
                type="button"
                className={styles.descBtn}
                onClick={() => {
                  setOpen1(!open1);
                }}
              >
                주요 업무 내용 <span>&gt;</span>
              </button>
            </div>
            <ul className={`${styles.cardDesc} ${open1 ? styles.open : ""}`}>
              <li className={styles.desc}>- MCT팀 기계셋팅 후 가공</li>
              <li className={styles.desc}>- 가공된 제품 1차 품질 확인 </li>
              <li className={styles.desc}>
                - 품질팀 제품 초품 검사 및 정밀검사
              </li>
              <li className={styles.desc}>- 3차원 정밀 측정 프로그램 작성</li>
            </ul>
          </li>
          <li className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.company}>(주)코다코(안성공장)</h3>
              <span className={styles.period}>2017.04 ~ 2018.12</span>
            </div>
            <div className={styles.cardBtn}>
              <button
                type="button"
                className={styles.descBtn}
                onClick={() => {
                  setOpen2(!open2);
                }}
              >
                주요 업무 내용 <span>&gt;</span>
              </button>
            </div>
            <ul className={`${styles.cardDesc} ${open2 ? styles.open : ""}`}>
              <li className={styles.desc}>
                - 자동화 기계에 가공 소재 채워넣기
              </li>
              <li className={styles.desc}>- 가공된 제품 1차 품질 확인</li>
              <li className={styles.desc}>- MCT 기계 소재넣고 1차 가공</li>
              <li className={styles.desc}>- 제품 외관확인 후 포장</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Experience;
