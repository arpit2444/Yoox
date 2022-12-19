import React from 'react'

export const CountContext = React.createContext();

export default function Context({children}) {
    const [count,setCount] = React.useState(0);

  
  return <CountContext.Provider value={{count,setCount}}>{children}</CountContext.Provider>
}
