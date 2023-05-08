export default function IncomeExpenseCards({type, sign, value}){
  return(
    <div>
      <h4>{type}</h4>
      <p id={`money-${sign}`} className={`money ${sign}`}> {value} </p>
    </div>
  );
}