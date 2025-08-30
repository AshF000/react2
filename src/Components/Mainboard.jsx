
import { useRef, useState } from 'react';
import Button from './Button';
import Header from './Header';
import Input from './Input';
import TaskCard from './TaskCard';
import { supabase } from '../supabaseClient';


const Mainboard = () => {

    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState([])

    const inputRef = useRef(null)

    const addTodo = async (title) => {
        const { data, error } = await supabase
            .from("todosTable")
            .insert([{ title }]).select()

        if (error) console.log("Error adding todo:", error)
        // else setTodos([data[0], ...todos])
        else console.log("dhukeche")
    }

    const handleAddTask = () => {
        let a = inputValue
        if (a.trim() === "") return;
        // setTasks([...tasks, a])
        setInputValue("")
        inputRef.current?.focus()

        addTodo(a)

    }

    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            handleAddTask()
        }
    }

    return (
        <div className="flex flex-col h-screen flex-1 bg-[#f5f5f5] p-6 overflow-hidden">
            <Header headTitle={"To - Do List"} />

            <div className="flex justify-evenly items-center w-full max-w-4xl mx-auto">
                <Input inputRef={inputRef} width={"w-[60%]"} value={inputValue} setValue={setInputValue} onKeyDown={handleKeyDown} />
                <Button width={"w-20%"} instruction={"Add"} onClick={handleAddTask} />
                <Button width={"w-20%"} instruction={"Search"} />
            </div>

            {/* TaskCard Scroll Container */}
            {/* <div className="mt-2 overflow-x-auto overflow-y-hidden w-full max-w-full"> */}
            <div className="mt-2 ">
                <TaskCard tasks={tasks} />
            </div>

        </div>

    );
};

export default Mainboard;
