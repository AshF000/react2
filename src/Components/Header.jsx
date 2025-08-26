import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'

const Header = ({ headTitle }) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='flex items-center border-b-1'>
            <div className='w-[80%]'><h1 className='font-semibold text-[42px]'>{headTitle}</h1></div>
            <div className='w-[20%] text-right'><p className='text-[20px]'>
                {format(date, "eee.dd.MM.yyyy | hh:mm:ss a")}
            </p>
            </div>
        </div>
    )
}

export default Header