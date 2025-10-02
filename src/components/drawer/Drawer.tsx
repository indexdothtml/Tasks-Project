import { useState } from "react";

import { SearchBar } from "../../features/index";
import { PanelButton } from "../index";
import classes from "./Drawer.module.css";

export default function Drawer() {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setToggleDrawer((previousState) => !previousState);
  };

  return (
    <nav
      className={`${classes.drawerBackgroud} ${
        toggleDrawer ? classes.openDrawer : classes.closeDrawer
      }`}
    >
      <div className={classes.webNameIconParent}>
        <span className={classes.websiteName}>Menu</span>
        <PanelButton
          togglePanelButton={toggleDrawer}
          onClick={handleToggleDrawer}
        />
      </div>

      <SearchBar />
    </nav>
  );
}
