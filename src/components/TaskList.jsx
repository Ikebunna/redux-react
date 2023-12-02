import React from "react";
import SingleTask from "./SingleTask";
import TaskModal from "./TaskModal";

const TaskList = () => {
  return (
    <div className="flex flex-col gap-1">
      <SingleTask />
      <SingleTask />
      <SingleTask />
      <TaskModal title={`Task 1`} id={2} />
    </div>
  );
};

export default TaskList;
