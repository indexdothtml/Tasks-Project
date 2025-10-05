import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Plus } from "lucide-react";
import { type ReactNode } from "react";

import { IconTextButton, DividerLine } from "../index";
import classes from "./CategoryList.module.css";

type CategoryListProps = {
  title: string;
  children: ReactNode;
  dynamicList?: boolean;
};

export default function CategoryList({
  title,
  children,
  dynamicList = false,
}: CategoryListProps) {
  return (
    <div className={classes.categoryList}>
      <div className={classes.title}>{title}</div>
      {dynamicList ? (
        <OverlayScrollbarsComponent
          options={{
            scrollbars: {
              // Auto hide when move cursor out
              autoHide: "move",
            },
          }}
          className={classes.listItems}
        >
          {children}
        </OverlayScrollbarsComponent>
      ) : (
        <div>{children}</div>
      )}
      {dynamicList && <IconTextButton Icon={Plus} text="Add New List" />}
      <DividerLine />
    </div>
  );
}
