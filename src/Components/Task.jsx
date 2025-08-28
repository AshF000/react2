import React from 'react'

const Task = ({index, taskDetails }) => {
    return (
        <div key={index} className='flex wrap items-center'>
            <button className='text-[32px] mr-2 hover:text-[rgba(255,174,66,0.6)]'>☆</button>
            <div className='flex justify-between items-center bg-[#9a9bbd] py-2 px-6 black text-[22px] rounded-xl overflow-hidden w-full '>
                <p className='truncate max-w-[calc(100%-100px)] overflow-hidden text-[20px]'>{taskDetails}</p>
                <div className='flex justify-between items-center w-[25%]'>
                    <button className='w-[28px] h-[28px] rounded-full bg-[#228be6] border-2 border-[#a5d8ff] outline-2 outline-white flex items-center justify-center hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="fill-black/80 size-4">
                            <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                        </svg>
                    </button>
                    <button className='w-[28px] h-[28px] rounded-full bg-[#FA5252] border-2 border-[#FFC9C9] outline-2 outline-white flex items-center justify-center hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="fill-black/80 size-4">
                            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task