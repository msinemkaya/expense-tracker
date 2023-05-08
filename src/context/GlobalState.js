import { useContext, useReducer } from 'react';

const initialState = {
  transactions: []
}

export const GlobalContext = useContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  
  return(
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}