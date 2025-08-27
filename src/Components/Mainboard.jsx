
import { useState } from 'react';
import Button from './Button';
import Header from './Header';
import Input from './Input';
import TaskCard from './TaskCard';



const Mainboard = () => {


    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState([])

    const handleAddTask = () => {
        if (inputValue.trim() === "") return;

        setTasks([...tasks, inputValue])
        setInputValue("")
    }

    return (
        <div className='flex-1 bg-[#f5f5f5] p-13'>
            <Header headTitle={"To - Do List"} />
            <div className='w-[80%] mx-auto flex justify-evenly items-center'>
                <Input width={"w-[60%]"} value={inputValue} setValue={setInputValue} />
                <Button width={"w-20%"} instruction={"Add"} onClick={handleAddTask} />
                <Button width={"w-20%"} instruction={"Search"} />
            </div>

            <div>
                <TaskCard tasks={tasks} />
            </div>



        </div>
    );
};

export default Mainboard;
