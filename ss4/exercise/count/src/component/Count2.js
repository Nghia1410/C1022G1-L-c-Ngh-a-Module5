import React, { useState } from 'react';

function Count2() {
    const [count2, setCount2] = useState(0);
    const handleIncrease2 = () => {
        setCount2(number => number + 2);
    }

    return (
        <>
            <div>Count:{count2}</div>
            <button onClick={handleIncrease2}>Add 2</button>
        </>
    );
}

export default Count2;