import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handdleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handdleResize);
    const isScrolled = () => {
      if (window.innerWidth < 1024) return;
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", isScrolled);
    return () => {
      window.removeEventListener("scroll", isScrolled);
      window.removeEventListener("resize", handdleResize);
    };
  });
  return (
    <header>
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.h1Wrap}>
            <h1>
              <a href="#">Logo</a>
            </h1>
          </div>
          <button
            type="button"
            className={styles.mBtn}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav
          className={`${menuOpen ? styles.open : ""} ${
            scrolled ? styles.scrollOpen : ""
          }`}
        >
          <div className={styles.gnb}>
            <ul className={styles.navName}>
              <li className={styles.navLink}>
                <a href="#intro">홈</a>
              </li>
              <li className={styles.navLink}>
                <a href="#skills">기술스택</a>
              </li>
              <li className={styles.navLink}>
                <a href="#projects">프로젝트</a>
              </li>
              <li className={styles.navLink}>
                <a href="#experience">경력사항</a>
              </li>
              <li className={styles.navLink}>
                <a href="#contact">컨택트</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
