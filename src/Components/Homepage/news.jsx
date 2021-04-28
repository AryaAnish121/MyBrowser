import React from "react";

const News = (e) => {
  return (
    <>
      {e.image !== null ? (
        <a href={e.url} className="news-card">
          <img src={e.image} alt={e.title} />
          <h1>{e.title}</h1>
        </a>
      ) : null}
    </>
  );
};
export default News;
