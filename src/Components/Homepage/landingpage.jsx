import React, { useEffect, useState } from "react";
import FromCompo from "./formCompo";
import NewsFeed from "./news";

const Landing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.articles);
      });
  }, []);

  console.log(data);

  return (
    <div className="main-browser">
      <FromCompo />
      <div className="news-feeds">
        <div className="news-feeds-inner">
          {/* {data.map((article, index) => {
            return (
              <NewsFeed
                key={index}
                title={article.title}
                url={article.url}
                image={article.urlToImage}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
};
export default Landing;
