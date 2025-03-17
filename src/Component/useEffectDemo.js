import React,{useEffect,useState} from 'react'

const useEffectDemo = () => {

   const [count, setCount] = useState(0);

   useEffect(() => {
    console.log("useEffect called", count);
   }, [count]);

   const Increment = () => {
      setCount(count + 1);
   }
  return (
     <div>

        <h1>useEffect {count}</h1>
        <h1>Calling useEffect: {count}</h1>
        <button onClick={Increment}>Increment</button>

    </div>
  )
}

export default useEffectDemo