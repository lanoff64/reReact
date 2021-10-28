import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    function plus(){
        setCount(count + 1);
        console.log(count+ 1)
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus}>plus</button>
            <hr/>
            <button onClick={() => setCount(count - 1)}>minus</button>
        </div>
    );
};

export default Counter;