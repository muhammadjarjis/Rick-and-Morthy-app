import React from "react";
import styles from "./Search.module.scss";

function Search({ setSearch, setPageNumber }) {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-3 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="search character"
        type="text"
        className={`${styles.input} shadow`}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="btn btn-primary fs-5 shadow"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
