import styles from "./Projects.module.scss";
import projectData from "../../data/projects";
import icons from "../../data/icon";
import { useEffect, useState } from "react";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [defaultCount, setDefaultCount] = useState(2);
  const [filterBtn, setFilterBtn] = useState("ALL");

  const filterData =
    filterBtn === "ALL"
      ? projectData
      : projectData.filter((p) => p.stack.includes(filterBtn));
  useEffect(() => {
    const updateCount = () => {
      setDefaultCount(window.innerWidth >= 1500 ? 3 : 2);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => {
      window.removeEventListener("resize", updateCount);
    };
  }, []);
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>프로젝트</h2>
          <p className={styles.titleDesc}>
            다양한 사이트들을 만들며 경험을 쌓았습니다.
          </p>
        </div>
        <div className={styles.filterBtn}>
          <button
            type="button"
            className={`${styles.filter} ${
              filterBtn === "ALL" ? styles.active : ""
            }`}
            onClick={() => {
              setFilterBtn("ALL");
            }}
          >
            ALL
          </button>
          <button
            type="button"
            className={`${styles.filter} ${
              filterBtn === "React" ? styles.active : ""
            }`}
            onClick={() => {
              setFilterBtn("React");
            }}
          >
            React
          </button>
        </div>
        <ul className={styles.cardWrap}>
          {filterData
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
                      페이지 보기
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
