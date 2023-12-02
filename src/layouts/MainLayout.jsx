import React from "react";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

const MainLayout = () => (
  <div className=" bg-zinc-200 max-w-2xl min-w-[50vw] p-8 space-y-4">
    <TaskList />
    <AddTask />
  </div>
);
export default MainLayout;
