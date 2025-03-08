import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// import useAutocomplete from "@mui/base/useAutocomplete";
import { useAutocomplete } from "@mui/base";

import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Listbox = styled("ul")({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0 0 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "auto",
  backgroundColor: "var(--color-black)",
});

function Search({ searchData = [], placeholder }) {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "search-bar",
    options: searchData,
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupedOptions.length > 0) {
      navigate(`/album/${groupedOptions[0].slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div {...getRootProps()}>
          <input
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li key={option.id} {...getOptionProps({ option, index })}>
              <p className={styles.albumTitle}>{option.title}</p>
            </li>
          ))}
        </Listbox>
      )}
    </div>
  );
}

export default Search;
