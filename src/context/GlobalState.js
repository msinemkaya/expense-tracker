import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [{id:0, text:'hakan', amount:777}]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  
  const values = {
    state,
    dispatch,
    deleteTransaction
  }

  return(
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}