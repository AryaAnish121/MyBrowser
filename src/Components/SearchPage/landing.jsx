import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const Search = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_KEY}&cx=${process.env.REACT_APP_GOOGLE_CX}&q=${match.params.query}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.items);
      });
  }, [match.params.query]);

  return (
    <div className="search">
      <Link to="/" className="home">
        <HomeIcon />
      </Link>
      <div className="search-inner">
        {data.map((result, index) => {
          return (
            <SearchResult
              key={index}
              title={result.title}
              link={result.link}
              snippet={result.snippet}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Search;
