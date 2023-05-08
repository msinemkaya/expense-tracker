import useGlobalContext from '../hooks/use-global-context';

export default function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? '-' : '+';

  const { deleteTransaction } = useGlobalContext()

  return (
    <>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}{' '}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>{' '}
        <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
      </li>
    </>
  );
}
