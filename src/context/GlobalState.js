import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [{id:0, text:'hakan', amount:777}]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  
  return(
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}