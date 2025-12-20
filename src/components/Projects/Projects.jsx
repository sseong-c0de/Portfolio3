import styles from "./Projects.module.scss";
import projectData from "../../data/projects";
import icons from "../../data/icon";
import { useEffect, useState } from "react";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [defaultCount, setDefaultCount] = useState(2);
  useEffect(() => {
    const updateCount = () => {
      setDefaultCount(window.innerWidth >= 1500 ? 3 : 2);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => {
      window.removeEventListener("resize", updateCount);
    };
  });
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>프로젝트</h2>
        </div>
        <ul className={styles.cardWrap}>
          {projectData
            .slice(0, showAll ? projectData.length : defaultCount)
            .map((data, index) => {
              return (
                <li key={index} className={styles.card}>
                  <h3 className={styles.cardTitle}>{data.title}</h3>
                  <ul className={styles.summaryList}>
                    {data.summary.map((item, index) => (
                      <li key={index}>- {item}</li>
                    ))}
                  </ul>
                  <p className={styles.desc}>{data.desc}</p>
                  <ul className={styles.iconList}>
                    <div className={styles.iconBox}>
                      {icons
                        .filter((icon) => data.stack.includes(icon.title))
                        .map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <li key={index} className={styles.iconItem}>
                              <Icon />
                            </li>
                          );
                        })}
                    </div>
                    <a
                      href={data.link}
                      target="blank"
                      className={styles.dataLink}
                    >
                      더 보기
                    </a>
                  </ul>
                </li>
              );
            })}
        </ul>
        <button
          type="button"
          className={styles.moreBtn}
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          {showAll ? "접기" : "더보기"}
        </button>
      </div>
    </section>
  );
}
export default Projects;
