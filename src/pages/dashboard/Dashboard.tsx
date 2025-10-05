import { TaskCountIndicator } from "../../components/index";
import { TaskView, Drawer } from "../../features/index";
import classes from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <main className={`ubuntu-regular ${classes.dashboard}`}>
      <Drawer />
      <div className={classes.mainView}>
        <div className={classes.mainViewHeader}>
          <h1>Today</h1>
          <TaskCountIndicator count={5} />
        </div>
        <TaskView />
      </div>
    </main>
  );
}
