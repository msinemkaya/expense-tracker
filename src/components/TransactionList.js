import useGlobalContex from '../hooks/use-global-context'
import Transaction from './Transaction';

export default function TransactionList(){

  const { state } = useGlobalContex()

  return(
    <>
      <h3>History</h3>
      <ul className='list' id='list'>
        {state.transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}