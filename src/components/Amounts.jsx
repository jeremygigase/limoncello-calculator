import React from "react";

import styled from "styled-components";

export const StyledAmounts = styled.div`
  grid-area: amounts;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: #f6c851;
  padding: 1em;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding-bottom: 4em;

  @media (min-width: 800px) {
    border-bottom-right-radius: 100%;
    border-bottom-left-radius: 0;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }
`;

const Amounts = ({ submitted, amount, sweetness }) => {
  return (
    <StyledAmounts>
      {submitted && (
        <div className='amounts'>
          <p>Water: {((amount * 2) / 3).toFixed(3)} l</p>
          <p>Alcohol: {((amount * 1) / 3).toFixed(3)} l</p>
          <p>Sugar: {((amount * sweetness) / 3).toFixed(3)} kg</p>
          <p>Lemons: </p>
          <p>{((amount * 7) / 3).toFixed(2)} Big Ones </p>
          <p>or {((amount * 10) / 3).toFixed(2)} Small Ones</p>
        </div>
      )}
    </StyledAmounts>
  );
};

export default Amounts;
