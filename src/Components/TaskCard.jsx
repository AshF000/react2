import React from 'react'
import Header from './Header'
import Task from './Task'

const Tasks = () => {
    return (
        <div className='w-[400px] bg-white rounded-lg py-4 px-6'>

            <div className='w-full border-b-1 mb-3'><h1 className='font-semibold text-[28px]'>{"Todo"}</h1></div>

            <div className='w-full'>
                <Task taskDetails={"task"} />
            </div>

        </div>
    )
}

export default Tasks