import React from 'react'
import Child1 from './Child1'
import { userContext } from './Context'
const Parent = () => {
   const username = "Saad Shaikh"
   return (
      <div>
         <userContext.Provider value={username}>
            <Child1 />
         </userContext.Provider>
      </div>
   )
}

export default Parent