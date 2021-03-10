import React from "react";
import styled from "styled-components";

export const StyledAmounts = styled.div`
  grid-area: amounts;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  padding: 1em;
  font-size: 16px;
  display: flex;
  justify-content: center;
  color: white;
  text-align: center;
  padding-bottom: 4em;
  overflow: scroll;
`;

const Amounts = ({ submitted, amount, sweetness, smallLemons, bigLemons }) => {
  let alcohol;
  let water;
  let sugar;
  let bigLemonsVar;
  let smallLemonsVar;

  if (amount) {
    alcohol = ((amount * 1) / 3).toFixed(3);
    water = ((amount * 2.1) / 3).toFixed(3);
    sugar = ((amount * sweetness) / 3).toFixed(3);
    bigLemonsVar = ((amount * 7) / 3).toFixed(2);
    smallLemonsVar = ((amount * 10) / 3).toFixed(2);
  }

  if (smallLemons) {
    alcohol = (smallLemons / 10).toFixed(3);
    water = (smallLemons / (10 / 2.1)).toFixed(3);
    sugar = ((smallLemons * sweetness) / 10).toFixed(3);
  }

  if (bigLemons) {
    alcohol = (bigLemons / 7).toFixed(3);
    water = (bigLemons / (7 / 2.1)).toFixed(3);
    sugar = ((bigLemons * sweetness) / 7).toFixed(3);
  }

  // 1000 / 10 100ml per SL 1000/7 per bL
  // 2,1 /10 of 7

  //amount * sweetness) / 3 / 10

  return (
    <StyledAmounts>
      {submitted && (
        <div className='amounts'>
          {smallLemons && <p>For small lemons</p>}
          {bigLemons && <p>For big lemons</p>}
          <p>
            Water: {water} L, Alcohol: {alcohol} L, Sugar: {sugar} kg
          </p>
          {amount && (
            <>
              <p>Lemons: </p>
              <p>
                {bigLemonsVar} big ones or {smallLemonsVar} small ones
              </p>
            </>
          )}
        </div>
      )}
    </StyledAmounts>
  );
};

export default Amounts;
