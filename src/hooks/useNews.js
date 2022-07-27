import { useEffect, useState } from "react";

const useNews = (serverUrl) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`${serverUrl}/api/v1/news/get-all-news`)
      .then((res) => res.json())
      .then((data) => setNews(data.result));
  }, [serverUrl]);

  return [news];
};

export default useNews;
