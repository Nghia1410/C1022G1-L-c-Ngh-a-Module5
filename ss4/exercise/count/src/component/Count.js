import React, { useState } from 'react';


function Count() {
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        setCount(number => number + 1);
    }

    return (
        <>
            <div>Count:{count}</div>
            <button onClick={handleIncrease}>Add 1</button>
        </>
    );
}

export default Count;