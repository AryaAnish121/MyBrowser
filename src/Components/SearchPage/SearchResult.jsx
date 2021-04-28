import React from "react";

const search = ({ title, link, snippet }) => {
  return (
    <>
      <div className="search-display">
        <a href={link} className="search-result">
          <h1>{link}</h1>
          <h1>{title}</h1>
          <h1>{snippet}</h1>
        </a>
      </div>
    </>
  );
};
export default search;
