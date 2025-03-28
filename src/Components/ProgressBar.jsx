import React from 'react'
import { useState, useEffect } from 'react';
function ProgressBar({ timer }) {
    const [remainingTime, setRemaingTime] = useState(timer);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("intervel");
            setRemaingTime((prevtime) => prevtime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (

        <progress value={remainingTime} max={timer} />
    )
}

export default ProgressBar;
