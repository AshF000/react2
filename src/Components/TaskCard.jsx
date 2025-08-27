import React from 'react'
import Task from './Task'

const TaskCard = ({ tasks }) => {
    return (
        <div className='w-[400px] bg-white rounded-lg py-4 px-6'>

            <div className='w-full border-b-1 mb-3'><h1 className='font-semibold text-[28px]'>{"Todo"}</h1></div>

            <div className='w-full space-y-3'>
                {tasks.map((taskDetails, index) => (
                    <Task key={index} taskDetails={taskDetails} />
                ))}
            </div>

        </div>
    )
}

export default TaskCard