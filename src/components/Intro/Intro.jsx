import styles from "./Intro.module.scss";
function Intro() {
  return (
    <section id="intro" className={styles.intro}>
      <div className={styles.textBox}>
        <p>안녕하세요</p>
        <p>웹 퍼블리셔 지망생</p>
        <p>
          <span>이재성</span>입니다.
        </p>
      </div>
    </section>
  );
}
export default Intro;
