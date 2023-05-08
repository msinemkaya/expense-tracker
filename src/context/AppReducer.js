export default (state, action) => {
  switch (action.type) {
    
    case 'DELETE_TRANSACTION':
      const transactions = state.transactions.filter(transaction => transaction.id !== action.payload)
      return {
        ...state,
        transactions,
      }
  
    default:
      return state
  }
}