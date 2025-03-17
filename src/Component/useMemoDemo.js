import React, { useMemo, useState } from 'react';


const useMemoDemo = () => {

   const [add, setAdd] = useState(0)
   const [state, setState] = useState(false)

   const addition = () => {
      setAdd(add + 1);
   }

   function count(add1) {
      for (let i = 0; i < 200000000; i++) { }
      return add1
   }

   let number = useMemo(() => {
      return count(add)
   }, [add])

   return (

      <>
         <button onClick={addition}>Add</button>
         <h1>{number}</h1>
         <button onClick={() => setState(!state)}>Please Click</button>
         <h1>{state ? "Button Clicked" : "Click Me"}</h1>
      </>
   )
}

export default useMemoDemo