import useGlobalContex from '../hooks/use-global-context'

export default function TransactionList(){

  const { state } = useGlobalContex()

  return(
    <>
      <h3>History</h3>
      <ul className='list' id='list'>
        {state.transactions.map((transaction, index) => (
          <li className='plus' key={index}>
            {transaction.text} <span>$</span> <button className='delete-btn'>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}