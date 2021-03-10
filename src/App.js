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

export const AtJer = styled.div`
  position: absolute;
  bottom: 0;
  left: 16px;
  font-size: 10px;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
`;
export const AtLun = styled.div`
  position: absolute;
  bottom: 0;
  right: 16px;
  font-size: 10px;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
`;

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState();
  const [sweetness, setSweetness] = useState(0.675);
  const [smallLemons, setSmallLemons] = useState();
  const [bigLemons, setBigLemons] = useState();
  const [clicked, setClicked] = useState(false);

  return (
    <div className='App'>
      <div className='container'>
        <StyledButton onClick={() => setClicked(!clicked)}>
          {clicked ? "Hide Recipe?" : "Show Recipe?"}
        </StyledButton>
        <Header />
        <Recipe clicked={clicked} setClicked={setClicked} />
        <Form
          setSweetness={setSweetness}
          setAmount={setAmount}
          setSubmitted={setSubmitted}
          setSmallLemons={setSmallLemons}
          setBigLemons={setBigLemons}
          submitted={submitted}
          amount={amount}
          smallLemons={smallLemons}
          bigLemons={bigLemons}
        />
        <Amounts
          submitted={submitted}
          amount={amount}
          smallLemons={smallLemons}
          bigLemons={bigLemons}
          sweetness={sweetness}
        />
      </div>
      <AtJer>
        <p>
          Coding by <a href='https://github.com/jeremygigase'>Jeremy Gigase</a>
        </p>
      </AtJer>
      <AtLun>
        <p>
          Lemon by{" "}
          <a href='https://www.instagram.com/studio.lunia/'>@studio.lunia</a>
        </p>
      </AtLun>
    </div>
  );
}

export default App;
