import classes from "./Dashboard.module.css";
import { Drawer } from "../../components/index";

export default function Dashboard() {
  return (
    <main className="ubuntu-regular">
      <div className={classes.dashboard}>
        <Drawer />
        <span>Sample</span>
      </div>
    </main>
  );
}
