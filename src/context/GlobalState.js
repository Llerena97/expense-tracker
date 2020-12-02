import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

const initialState = {
  transactions: []
};

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const deleteTransaction = id => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  const addTransaction = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider