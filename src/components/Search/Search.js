import { ReactComponent as SeachIcon } from "../../assets/search-icon.svg";
// import SearchItem from "../SearchItem/SearchItem";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  // useEffect(()=>{
  //   setFilteredData(data);
  // },[data])

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setFilteredData(null);
      return;
    }
    const regEx = new RegExp(`^${e.target.value}`, "i");
    const ans = data.filter((ele) => ele.title.match(regEx) !== null);
    console.log(ans);
    setFilteredData(ans);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
        <button className={styles.searchBtn} type="submit">
          <SeachIcon />
        </button>
        <div
          className={
            !filteredData
              ? `${styles.searchResults} ${styles.hide}`
              : `${styles.searchResults}`
          }
        >
          {filteredData && filteredData.length ? (
            filteredData.map((ele) => {
              console.log("ss");
              return (
                <Link
                  to={`/albums/${ele.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <SearchItem album={ele} />
                </Link>
              );
            })
          ) : (
            <p
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
              }}
            >
              No Albums Found
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default Search;
