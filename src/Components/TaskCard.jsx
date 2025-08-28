import React from 'react'
import Task from './Task'

const TaskCard = ({ tasks }) => {
  const handleChunk = (tasks, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < tasks.length; i += chunkSize) {
      chunks.push(tasks.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const taskChunks = handleChunk(tasks, 10  ); // or 5 as you prefer

  return (
    <div className="w-full px-6 py-4">
      {/* Scroll only this div */}
      <div className="overflow-x-auto ">
      {/* <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-red-500"> */}
        <div className="flex space-x-4 w-max  h-full">
          {taskChunks.map((tasksChunk, chunkIndex) => (
            <div
              key={chunkIndex}
              className="w-[400px] bg-white rounded-lg py-4 px-6 shrink-0"
            >
              <div className="w-full border-b mb-3">
                <h1 className="font-semibold text-[28px]">{"Todo"}</h1>
              </div>
              <div className="w-full space-y-3">
                {tasksChunk.map((taskDetails, index) => (
                  <Task key={index} taskDetails={taskDetails} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
