import SingleTask from "./SingleTask";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="flex flex-col gap-1">
      {tasks.map((item) => (
        <SingleTask key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TaskList;
