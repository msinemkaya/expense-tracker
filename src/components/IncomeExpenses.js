import IncomeExpenseCards from './IncomeExpenseCards';

export default function IncomeExpenses(){
  return(
    <div className='inc-exp-container'>
      <IncomeExpenseCards type={'income'} sign={'plus'} />
      <IncomeExpenseCards type={'expense'} sign={'minus'} />
    </div>
  );
}