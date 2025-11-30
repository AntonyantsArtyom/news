import styles from "./Filter.module.css";
import { useState } from "react";

export const Filter = () => {
  const getInitialSearchValue = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");
    return searchParam ? decodeURIComponent(searchParam) : "";
  };

  const [search, setSearch] = useState<string>(getInitialSearchValue());

  const handleClick = () => {
    const newUrl = `${window.location.pathname}?search=${encodeURIComponent(search)}`;
    window.history.pushState({}, "", newUrl);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className={styles.filter}>
      <input className={styles.input} type="text" placeholder="фраза для поиска" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button className={styles.button} onClick={handleClick}>
        Поиск
      </button>
    </div>
  );
};
