import useGlobalContext from '../hooks/use-global-context';

export default function Balance(){

  const { state } = useGlobalContext()

  const amounts = state.transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, crr) => (acc += crr), 0).toFixed(2)

  return(
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
}