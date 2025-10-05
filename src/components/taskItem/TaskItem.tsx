import { ChevronRight, Squircle, CalendarX, Calendar } from "lucide-react";

import { DividerLine, DividerLineVertical } from "../index";
import { type ColorPalets } from "../../types/common";
import classes from "./TaskItem.module.css";

type Type = {
  typeName: string;
  color: ColorPalets;
};

type TaskItemProps = {
  title: string;
  createdOn: string;
  dueDateOn: string;
  type: Type;
};

export default function TaskItem({
  title,
  createdOn,
  dueDateOn,
  type,
}: TaskItemProps) {
  return (
    <>
      <div className={classes.taskItem}>
        <div>
          <input type="checkbox" />
        </div>
        <div className={classes.taskItemData}>
          <div>{title}</div>
          <div className={classes.taskMetaData}>
            <div className={classes.data}>
              <Calendar size={18} strokeWidth={3} color="var(--icon-color)" />{" "}
              <span>{createdOn}</span>
            </div>
            <DividerLineVertical />
            <div className={classes.data}>
              <CalendarX size={18} strokeWidth={3} color="var(--icon-color)" />{" "}
              <span>{dueDateOn}</span>
            </div>
            <DividerLineVertical />
            <div className={classes.data}>
              <Squircle fill={type.color} size={18} color={type.color} />{" "}
              <span>{type.typeName}</span>
            </div>
          </div>
        </div>
        <div>
          <ChevronRight size={18} strokeWidth={3} color="var(--icon-color)" />
        </div>
      </div>
      <DividerLine />
    </>
  );
}
