import Task from './Task'
import { supabase } from '../supabaseClient';
import { useEffect, useState } from 'react';


const TaskCard = ({ toFetch, setToFetch }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    toFetch && fetchTodos()
  }, [toFetch])

  const fetchTodos = async () => {
    const { data, error } = await supabase.from("todosTable").select("*").order("created_at", { ascending: false })

    if (error) console.log("Error fetching todos:", error)
    else setTodos(data)
    setToFetch(false)
  }

  const handleChunk = (tasks, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < tasks.length; i += chunkSize) {
      chunks.push(tasks.slice(i, i + chunkSize));
    }
    return chunks;
  };

  console.log("hi")

  const taskChunks = handleChunk(todos, 10); // or 5 as you prefer

  return (
    <div className="w-full px-6 py-4">
      {/* Scroll only this div */}
      <div className="overflow-x-auto ">
        {/* <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-red-500"> */}
        <div className="flex space-x-4  h-full">
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
                  <Task key={index} taskDetails={taskDetails.title} />
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
