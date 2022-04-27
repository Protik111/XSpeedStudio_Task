import React from 'react';

const Time = () => {
    const date = new Date().toISOString();
    const handleGetDay = (dateStr) => {
        const dateT = new Date(dateStr).getDay();
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        return days[dateT]
    };

    const formatDate = (dateStr) => {
        const dateF = new Date(dateStr);
        return `${dateF.getDate()}/${dateF.getMonth()}/${dateF.getFullYear()}`
    }
    return (
        <>
            <div>
                <h2>Lesson of 37th class (Thinking in React)</h2>
            </div>
            <h2>
                {handleGetDay(date)} -- {formatDate(date)}
            </h2>
        </>
    );
};

export default Time;