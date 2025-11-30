import { useEffect, useState } from "react";
import { fetchNews } from "./api";
import "./App.css";
import { News } from "./entities/News/News";
import type { INews } from "./entities/News/News.types";
import { Filter } from "./features/Filter/Filter";
import { onChangeUrl } from "./utils";

function App() {
  const [news, setNews] = useState<INews[]>([]);
  const [searchQuery, setSeacrthQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await fetchNews(searchQuery);
      setNews(newsData);
    };
    fetchData();
  }, [searchQuery]);

  onChangeUrl(setSeacrthQuery);

  return (
    <div className="container">
      <Filter />
      <div className="list">
        {news.map((newsItem, index) => (
          <News key={index} title={newsItem.title} description={newsItem.description} date={newsItem.date} searchQuery={searchQuery} />
        ))}
      </div>
    </div>
  );
}

export default App;
