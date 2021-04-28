import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo.gif";

const Form = () => {
  const [value, setvalue] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    history.push(`/search/${value}`);
  };

  return (
    <div
      className="hero"
      style={{
        background: "url(https://source.unsplash.com/random?nature)",
      }}
    >
      <img src={logo} alt="logo" className="hero-logo" />
      <form className="search-box" onSubmit={handleSumbit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Please enter your query"
        />
        <Link to={`/search/${value}`}>
          <SearchIcon />
        </Link>
      </form>
    </div>
  );
};
export default Form;
