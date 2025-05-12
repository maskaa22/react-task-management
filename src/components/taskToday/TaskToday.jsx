import Task from "../task/Task";
import TaskDetails from "../taskDetails/TaskDetails";
import c from "./TaskToday.module.css";

const TaskToday = () => {
  return (
    <div className={c.task}>
      <div>
        <p className={c.title}>Task Today</p>
        <Task />
      </div>

      <hr className={c.line} />
      <TaskDetails />
    </div>
  );
};

export default TaskToday;
