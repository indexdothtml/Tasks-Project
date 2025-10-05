import {
  LogOut,
  SlidersHorizontal,
  ListTodo,
  ChevronsRight,
} from "lucide-react";
import { useState } from "react";

import { SearchBar } from "../index";
import {
  IconTextButton,
  ListItem,
  CategoryList,
  PanelButton,
} from "../../components/index";
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

      <CategoryList title="TASKS">
        <ListItem Icon={ChevronsRight} name="Upcoming" count={12} />
        <ListItem Icon={ListTodo} name="Today" count={5} />
      </CategoryList>

      <CategoryList title="LISTS" dynamicList={true}>
        <ListItem
          name="Personal"
          count={12}
          dynamicListIcon={true}
          iconFillColor="#5c7cfa"
        />
        <ListItem
          name="Work"
          count={5}
          dynamicListIcon={true}
          iconFillColor="#66d9e8"
        />
        <ListItem
          name="List 1"
          count={5}
          dynamicListIcon={true}
          iconFillColor="#8ce99a"
        />
      </CategoryList>

      <div className={classes.navigationButtons}>
        <IconTextButton
          Icon={SlidersHorizontal}
          text="Settings"
          classNames=""
        />
        <IconTextButton Icon={LogOut} text="Sign out" />
      </div>
    </nav>
  );
}
