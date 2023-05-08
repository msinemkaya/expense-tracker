export default function IncomeExpenseCards({type, sign}){
  return(
    <div>
      <h4>{type}</h4>
      <p id={`money-${sign}`} className={`money ${sign}`}></p>
    </div>
  );
}