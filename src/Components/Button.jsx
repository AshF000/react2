import React from 'react'

const Button = ({ width, instruction, onClick }) => {
    return (
        <div className={`${width}`}>
            <button  className='py-4 px-10 font-medium bg-white rounded-lg' onClick={onClick}>{instruction}</button>
        </div>
    )
}

export default Button