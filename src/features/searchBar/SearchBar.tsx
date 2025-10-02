import { Search } from "lucide-react";

import classes from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <Search size={18} strokeWidth={3} color="var(--icon-color)" />
      <input
        type="text"
        placeholder="Search"
        className={classes.searchBarInput}
      />
    </div>
  );
}
