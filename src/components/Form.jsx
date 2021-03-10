import React from "react";
import styled from "styled-components";

export const StyledForm = styled.form`
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  overflow: scroll;

  label {
    text-align: center;
    color: white;
    font-size: 0.6em;
  }
  input {
    margin: 0.8em 0;
    text-align: center;
    font-size: 0.5em;
    padding: 0.6em;
    border: none;
    border-radius: 16px;
    background: #fff6d6;
    outline: none;
  }
`;

export const StyledSubmit = styled.input`
  border: none;
  background: #fff6d6;
  border-radius: 16px;
  outline: none;
  padding: 1.2em;
`;

export const StyledSelect = styled.select`
  margin: 1.2em 0;
  padding: 0.8em;
  border: none;
  background: #fff6d6;
  border-radius: 16px;
  outline: none;
`;

const Form = ({
  setAmount,
  setSubmitted,
  setSweetness,
  setSmallLemons,
  setBigLemons,
  amount,
  submitted,
  smallLemons,
  bigLemons,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const [starter, setStarter] = React.useState();

  let input;

  if (starter === "total") {
    input = (
      <>
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
            setBigLemons();
            setSmallLemons();
            setAmount(e.target.value);
          }}
          required
        />
      </>
    );
  }
  if (starter === "small-lemons") {
    input = (
      <>
        <label htmlFor='number' className='label'>
          How many small lemons do you have?
        </label>
        <input
          className='input'
          type='number'
          id='lemons'
          name='lemons'
          value={smallLemons}
          onChange={(e) => {
            setBigLemons();
            setAmount();
            setSmallLemons(e.target.value);
          }}
          required
        />
      </>
    );
  }
  if (starter === "big-lemons") {
    input = (
      <>
        <label htmlFor='number' className='label'>
          How many big lemons do you have?
        </label>
        <input
          className='input'
          type='number'
          id='lemons'
          name='lemons'
          value={bigLemons}
          onChange={(e) => {
            setAmount();
            setSmallLemons();
            setBigLemons(e.target.value);
          }}
          required
        />
      </>
    );
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <label htmlFor='number'>
        <p>How do you want to start with the amount of lemons you have?</p>
        <p> Or the total amount you want to make?</p>
      </label>
      <StyledSelect
        onChange={(e) => {
          setStarter(e.target.value);
        }}
        id='starter'
        name='starter'
        required>
        <option selected disabled hidden value=''></option>
        <option value='small-lemons'>Small Lemons</option>
        <option value='big-lemons'>Big Lemons</option>
        <option value='total'>Total</option>
      </StyledSelect>
      {input}

      <label htmlFor='number'>How sweet do you want your limoncello?</label>
      <StyledSelect
        onChange={(e) => {
          setSweetness(e.target.value);
        }}
        id='sweetness'
        name='sweetness'
        required>
        <option selected disabled hidden value=''></option>
        <option value='0.625'>Not Very</option>
        <option value='0.675'>Normal</option>
        <option value='0.725'>Very Sweet</option>
      </StyledSelect>

      <StyledSubmit type='submit' value='Make Limoncello!' className='submit' />
    </StyledForm>
  );
};

export default Form;
