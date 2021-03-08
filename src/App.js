import "./App.css";
import { useState } from "react";

import { Header, Form, Amounts, Recipe } from "./components";

import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: "Dancing Script", cursive;
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  outline: none;
`;

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState(0);
  const [sweetness, setSweetness] = useState(650);
  const [clicked, setClicked] = useState(false);

  return (
    <div className='App'>
      <div className='container'>
        <StyledButton onClick={() => setClicked(!clicked)}>
          {clicked ? "Hide Recipe?" : "Show Recipe?"}
        </StyledButton>
        <Header />
        <Recipe clicked={clicked} />
        <Form
          setSweetness={setSweetness}
          setAmount={setAmount}
          setSubmitted={setSubmitted}
          submitted={submitted}
          amount={amount}
        />
        <Amounts submitted={submitted} amount={amount} sweetness={sweetness} />
      </div>
    </div>
  );
}

export default App;
