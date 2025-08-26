import React from "react";
import Sidebar from "../Components/Sidebar";
import Mainboard from "../Components/Mainboard";

const Todo = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <Mainboard />
      </div>
    </>
  );
};

export default Todo;
