import { useState, useEffect, type ReactNode } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Plus } from "lucide-react";

import { type Task } from "../../types/common";
import { getAllTasks } from "../../services/taskServices";
import { TaskItem, IconTextButton } from "../../components/index";
import classes from "./TaskView.module.css";

export default function TaskView() {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      const result = await getAllTasks();
      if (result.success) {
        setTasks(result.data);
        setError("");
      } else {
        setTasks(null);
        setError(result.message);
      }
    })();
  }, []);

  let taskView: ReactNode;

  if (error !== "") {
    taskView = <div>Error {error}</div>;
  } else if (tasks && tasks.length !== 0) {
    taskView = tasks.map((task) => (
      <TaskItem
        key={task.id}
        title={task.title}
        createdOn={task.createdOn}
        dueDateOn={task.dueDateOn}
        type={{ typeName: task.listType.typeName, color: task.listType.color }}
        completed={task.completed}
      />
    ));
  } else {
    taskView = <div>No Tasks Found!</div>;
  }

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
          {taskView}
        </OverlayScrollbarsComponent>
      </div>
    </>
  );
}
