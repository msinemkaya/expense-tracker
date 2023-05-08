import { useState } from 'react';
import useGlobalContext from '../hooks/use-global-context';
import { v4 as uuid } from 'uuid';

export default function AddTransaction() {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: uuid(),
      text,
      //amount, // to parse it into an integer you can do amount: +amount istead of parseInt
      amount: +amount
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' placeholder='Enter text...' value={text} onChange={({ target }) => setText(target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' placeholder='Enter amount...' value={amount} onChange={({ target }) => setAmount(target.value)}/>
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
}
