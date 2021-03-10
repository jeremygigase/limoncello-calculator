import React from "react";
import styled from "styled-components";

export const StyledRecipe = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const Paper = styled.div`
  position: relative;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px #888;
  height: 100vh;
  width: 100%;

  ::before {
    content: "";
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 32px;
    background-color: rgba(255, 0, 0, 0.6);
  }
`;

export const Pattern = styled.div`
  height: 100%;
  background-image: repeating-linear-gradient(white 0px, white 24px, teal 25px);
`;

export const Content = styled.div`
  padding-left: 36px;
  padding-right: 16px;
  font-family: "Dancing Script", cursive;
  font-size: 19px;
  @media only screen and (min-width: 800px) {
    font-size: 32px;
  }
`;

export const StyledButton = styled.button`
  font-family: "Dancing Script", cursive;
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  outline: none;
`;

const Recipe = ({ clicked, setClicked }) => {
  return (
    <>
      {clicked && (
        <StyledRecipe>
          <Paper>
            <StyledButton onClick={() => setClicked(!clicked)}>
              {clicked ? "Hide Recipe?" : "Show Recipe?"}
            </StyledButton>
            <Pattern>
              <Content>
                <p>Recipe</p>
                <p>
                  Step 1: Remove the peels from the lemons and put them in the
                  alcohol
                </p>
                <p>
                  Step 2: Leave it for a week in a dark room at room temperature{" "}
                </p>
                <p>Step 3: Sieve the alcohol through a cheesecloth</p>
                <p>
                  Step 4: Mix the sugar & water together until the sugar is
                  dissolved
                </p>
                <p>
                  Step 5: Mix the water, sugar mixture with the lemon flavored
                  alcohol
                </p>
                <p>Step 6: Store in the freezer until cold</p>
                <p>Step 7: Now you have limoncello! Enjoy!</p>
                <p>recipe by Rob</p>
              </Content>
            </Pattern>
          </Paper>
        </StyledRecipe>
      )}{" "}
    </>
  );
};

export default Recipe;
