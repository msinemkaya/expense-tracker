import useGlobalContext from '../hooks/use-global-context';
import IncomeExpenseCards from './IncomeExpenseCards';

export default function IncomeExpenses(){

  const { state: { transactions } } = useGlobalContext()

  const amounts = transactions.map(transaction => transaction.amount)
  
  const income = amounts.filter(amount => amount > 0)
    .reduce((acc, crr) => (acc += crr),0).toFixed(2)

  const expense = (amounts.filter(amount => amount < 0)
  .reduce((acc, crr) => (acc += crr),0) * 1).toFixed(2)


  return(
    <div className='inc-exp-container'>
      <IncomeExpenseCards type={'income'} sign={'plus'} value={income}/>
      <IncomeExpenseCards type={'expense'} sign={'minus'} value={expense} />
    </div>
  );
}