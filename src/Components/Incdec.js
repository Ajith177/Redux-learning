import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/Counterslice';

function Incdec() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

    return (
        <div>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        </div>
    )
}

export default Incdec;
