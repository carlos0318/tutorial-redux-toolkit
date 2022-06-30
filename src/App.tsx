import { useState } from 'react';
import type { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counter/counterSlice'
import { useGetProductsQuery } from './redux/api/apiSlice'

function App() {
  const [amount, setAmount] = useState(1)

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const { data, error, isLoading } = useGetProductsQuery(null)
  console.log(data);

  if(isLoading) {
    return <span>Loading...</span>
  }

  if(error){
    return <span>Something went wrong</span>
  }

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input type="number" min={1} value={amount} onChange={(e) => setAmount(parseInt(e.target.value))}  />
        <button
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}

export default App;
