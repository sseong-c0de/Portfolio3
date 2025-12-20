import styles from "./Projects.module.scss";
import projectData from "../../data/projects";
import icons from "../../data/icon";
import { useState } from "react";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>프로젝트</h2>
        </div>
        <ul className={styles.cardWrap}>
          {projectData
            .slice(0, showAll ? projectData.length : 3)
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
