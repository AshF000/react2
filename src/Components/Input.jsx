import React, { useEffect, useRef, useState } from 'react'

const Input = ({width}) => {

    const [value, setValue] = useState("")

    const [clear, setClear] = useState(false)

    const inputRef = useRef(null)

    const handleClear = () => {
        setValue("");
        inputRef.current?.focus()
    }


    useEffect(() => {
        setClear(value != "")
    }, [value])



    return (
        <div className= {`${width} rounded-lg p-3 my-6 bg-white relative`}>
            <input placeholder='Add To-Do / Note' ref={inputRef} className='w-full focus:outline-0 text-xl ' type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
            {clear &&
                <button className='absolute right-4 font-bold' onClick={handleClear}>X</button>
            }
        </div>
    )
}

export default Input