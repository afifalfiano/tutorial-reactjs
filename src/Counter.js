
import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const onDecrementHandler = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const onIncrementHandler = () => {
        setCount(count + 1);

    }

    return (
        <div className="counter">
                <button onClick={onDecrementHandler}>Kurang</button>
                {count}
                <button onClick={onIncrementHandler}>Tambah</button>
        </div>
    )
}

export default Counter;