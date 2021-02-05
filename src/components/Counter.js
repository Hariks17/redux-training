
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment } from '../actions/actions'


const Counter = () => {
    const count = useSelector(state => state.counter)
    const dispatch= useDispatch()
    return (
        <div>
            <h1>Counter Application</h1>
                    <h1>Count : {count}</h1>
                    <button onClick={()=>dispatch(increment())}>+</button>
                    <button onClick={()=>dispatch(decrement())}>-</button>
                    <button>reset</button>
                    

        </div>
    )
}

export default Counter
