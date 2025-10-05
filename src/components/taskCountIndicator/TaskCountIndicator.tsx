import classes from "./TaskCountIndicator.module.css";

type TaskCountIndicatorProps = {
  count: number;
};

export default function TaskCountIndicator({ count }: TaskCountIndicatorProps) {
  return <div className={classes.taskCountIndicator}>{count}</div>;
}
