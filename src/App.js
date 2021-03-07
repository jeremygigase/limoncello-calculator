import "./App.css";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState(0);
  const [sweetness, setSweetness] = useState(650);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // if (amount) {
    //   //setSubmitted(false);
    //   setAmount(0);
    // }
  };

  return (
    <div className='App'>
      <header className='App-header'>Limoncello calculator!</header>
      <div className='recipe'>
        <p>Recipe</p>
        <p>Step 1: Peel lemons and put them in the alcohol</p>
        <p>Step 2: Leave it for a week in a dark room at room temperature </p>
        <p>Step 3: Sieve the alcohol through a cheesecloth</p>
        <p>
          Step 4: Mix the sugar & water together until the sugar is dissolved
        </p>
        <p>
          Step 5: Mix the water, sugar mixture with the lemon flavored alcohol
        </p>
        <p>Step 6: Now you have limoncello!</p>
      </div>
      <form className='form-control' onSubmit={submitHandler}>
        <label htmlFor='number' className='label'>
          How much limoncello do you want to make (in liters)?
        </label>
        <input
          className='input'
          type='number'
          id='amount'
          name='amount'
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          required
        />
        <select
          onChange={(e) => {
            setSweetness(e.target.value);
          }}
          id='sweetness'
          name='sweetness'
          required>
          <option value='0.600'>Not a lot</option>
          <option value='0.650'>Normal</option>
          <option value='0.700'>Very Sweet</option>
        </select>
        {submitted && !amount && (
          <div className='invalid-feedback'>A number is required</div>
        )}
        <input type='submit' value='Submit' className='submit' />
      </form>
      {submitted && (
        <div className='amounts'>
          <p>Water: {((amount * 2) / 3).toFixed(3)} l</p>
          <p>Alcohol: {((amount * 1) / 3).toFixed(3)} l</p>
          <p>Sugar: {((amount * sweetness) / 3).toFixed(3)} kg</p>
          <p>Lemons: </p>
          <p>{((amount * 7) / 3).toFixed(2)} big ones </p>
          <p>or {((amount * 10) / 3).toFixed(2)} small ones</p>
        </div>
      )}
    </div>
  );
}

export default App;
