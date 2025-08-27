import React from 'react'

const Button = ({ width, instruction }) => {
    return (
        <div className={`${width}`}>
            <button className='py-4 px-10 font-medium bg-white rounded-lg'>{instruction}</button>
        </div>
    )
}

export default Button