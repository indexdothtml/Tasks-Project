import classes from "./Dashboard.module.css";
import { Drawer } from "../../features/index";

export default function Dashboard() {
  return (
    <main className={`ubuntu-regular ${classes.dashboard}`}>
      <Drawer />
      <div>
        <span>Sample</span>
      </div>
    </main>
  );
}
