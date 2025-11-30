import styles from "./News.module.css";
import type { INews } from "./News.types";

export const News = ({ title, description, date, searchQuery }: INews & { searchQuery: string }) => {
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <mark key={index} className={styles.highlight}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className={styles.news}>
      <div className={styles.header}>
        <span>{highlightText(title, searchQuery)}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.description}>{highlightText(description, searchQuery)}</div>
    </div>
  );
};
