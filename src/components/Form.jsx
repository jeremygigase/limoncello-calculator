import React from "react";

import styled from "styled-components";

export const StyledForm = styled.form`
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6c851;
  padding: 1em;
  text-align: center;

  label {
    text-align: center;
    color: white;
    font-size: 0.8em;
  }
  input {
    margin: 0.8em 0;
    text-align: center;
    font-size: 0.8em;
    padding: 0.4em;
    border: none;
    border-radius: 16px;
    background: #fff6d6;
    outline: none;
  }

  @media (min-width: 800px) {
    border-bottom-left-radius: 50%;
    align-items: flex-end;
    justify-content: flex-start;
    label {
      text-align: right;
    }
    input {
      text-align: right;
    }
  }
`;

export const StyledSubmit = styled.input`
  border: none;
  background: #fff6d6;
  border-radius: 16px;
  outline: none;
  padding: 2em;
`;

export const StyledSelect = styled.select`
  margin-top: 1em;
  padding: 1em;
  border: none;
  background: #fff6d6;
  border-radius: 16px;
  outline: none;
`;

const Form = ({ setAmount, setSubmitted, setSweetness, amount, submitted }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // if (amount) {
    //   //setSubmitted(false);
    //   setAmount(0);
    // }
  };

  return (
    <StyledForm onSubmit={submitHandler}>
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
      <label htmlFor='number'>How sweet do you want your limoncello?</label>
      <StyledSelect
        onChange={(e) => {
          setSweetness(e.target.value);
        }}
        id='sweetness'
        name='sweetness'
        required>
        <option value='0.625'>Not Very</option>
        <option selected='selected' value='0.675'>
          Normal
        </option>
        <option value='0.725'>Very Sweet</option>
      </StyledSelect>
      {submitted && !amount && (
        <div className='invalid-feedback'>A number is required</div>
      )}
      <StyledSubmit type='submit' value='Submit' className='submit' />
    </StyledForm>
  );
};

export default Form;
