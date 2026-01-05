import styles from "./Skills.module.scss";
import icons from "../../data/icon.js";
function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>기술스택 및 디자인툴</h2>
          <p className={styles.titleDesc}>아래의 기술들을 사용이 가능합니다.</p>
        </div>

        <ul className={styles.icons}>
          {icons.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index} className={styles.icon}>
                <Icon />
              </li>
            );
          })}
        </ul>
        {/* <p className={styles.desc}>
          <span>구조적인 마크업과 반응형</span>
          <span>퍼블리싱을 구현합니다.</span>
        </p> */}
      </div>
    </section>
  );
}
export default Skills;
