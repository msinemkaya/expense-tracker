import { useState } from 'react';

export default function AddTransaction() {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
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
