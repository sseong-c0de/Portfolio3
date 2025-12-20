import styles from "./Contact.module.scss";
function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.wrap}>
        <div className={styles.desc}>
          <p>봐주셔서 감사합니다.</p>
          <p>언제든 편하게 연락주세요.</p>
        </div>
        <div className={styles.info}>
          <a href="mailto:sseong5129@naver.com">이메일:sseong5129@naver.com</a>
          <a href="tel:010-9400-5475">연락처:010.9400.5475</a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
