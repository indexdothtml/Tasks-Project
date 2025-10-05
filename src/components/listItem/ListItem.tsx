import { Squircle, Shapes, type LucideProps } from "lucide-react";
import { type ComponentType } from "react";

import { type ColorPalets } from "../../types/common";
import classes from "./ListItem.module.css";

type ListItemProps = {
  Icon?: ComponentType<LucideProps>;
  name: string;
  count?: number;
  dynamicListIcon?: boolean;
  iconFillColor?: ColorPalets;
};

export default function ListItem({
  Icon,
  name,
  count = 0,
  dynamicListIcon = false,
  iconFillColor = "#5c7cfa",
}: ListItemProps) {
  const DefaultIcon = dynamicListIcon ? (
    <Squircle fill={iconFillColor} size={18} color={iconFillColor} />
  ) : (
    <Shapes size={18} strokeWidth={3} color="var(--icon-color)" />
  );

  return (
    <div className={classes.listItem}>
      {!Icon ? (
        DefaultIcon
      ) : (
        <Icon size={18} strokeWidth={3} color="var(--icon-color)" />
      )}
      <div className={classes.listNameIndicator}>
        <div>{name}</div>
        <div className={classes.taskCountIndicator}>{count}</div>
      </div>
    </div>
  );
}
