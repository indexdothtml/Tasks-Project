import classes from "./TaskHandlingForm.module.css";

import { TextButton } from "../../components/index";

export default function TaskHandlingForm() {
  return (
    <form className={classes.taskHandlingForm}>
      <input
        type="text"
        id="title-id"
        name="title"
        placeholder="Title"
        className={classes.title}
      />
      <textarea
        id="description-id"
        name="description"
        placeholder="Description"
        className={classes.description}
      />
      <div className={classes.list}>
        <label htmlFor="list-id">List</label>
        <select id="list-id" name="list">
          <option></option>
          <option>Personal</option>
          <option>Work</option>
        </select>
      </div>
      <div className={classes.dueDate}>
        <label htmlFor="dueDate-id">Due date</label>
        <input type="date" id="dueDate-id" name="dueDate" />
      </div>

      <div className={classes.formActionButton}>
        <TextButton text="Delete Task" onClick={() => {}} />
        <TextButton text="Save Changes" onClick={() => {}} />
      </div>
    </form>
  );
}
