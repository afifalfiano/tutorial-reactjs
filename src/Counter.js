import { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [infoNumber, setInfoNumber] = useState('Ganjil');

    useEffect(() => {
    if (count % 2 === 0) {
        setInfoNumber('Genap');
    } else {
        setInfoNumber('Ganjil');
    }
    }, [count]);

    const onDecrementHandler = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const onIncrementHandler = () => {
        setCount(count + 1);

    }

    return (
        <div>
        <div className="counter">
                <button onClick={onDecrementHandler}>Kurang</button>
                {count}
                <button onClick={onIncrementHandler}>Tambah</button>
        </div>
        <div className="info">
            {infoNumber}
        </div>
        </div>
    )
}

export default Counter;