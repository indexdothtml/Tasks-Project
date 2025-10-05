import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Plus } from "lucide-react";

import { TaskItem, IconTextButton } from "../../components/index";
import classes from "./TaskView.module.css";

export default function TaskView() {
  return (
    <>
      <div className={classes.addTaskButton}>
        <IconTextButton
          Icon={Plus}
          text="Add New Task"
          classNames={classes.noBackgroundColorOnHover}
        />
      </div>
      <div className={classes.taskViewList}>
        <OverlayScrollbarsComponent
          options={{
            scrollbars: {
              // Auto hide when move cursor out
              autoHide: "move",
            },
          }}
          style={{ height: "inherit" }}
        >
          <TaskItem
            title="This is my first task"
            createdOn="05-10-2025"
            dueDateOn="10-10-2025"
            type={{ typeName: "Personal", color: "#66d9e8" }}
          />

          <TaskItem
            title="This is my first task"
            createdOn="05-10-2025"
            dueDateOn="10-10-2025"
            type={{ typeName: "Personal", color: "#66d9e8" }}
          />

          <TaskItem
            title="This is my first task"
            createdOn="05-10-2025"
            dueDateOn="10-10-2025"
            type={{ typeName: "Personal", color: "#66d9e8" }}
          />
        </OverlayScrollbarsComponent>
      </div>
    </>
  );
}
