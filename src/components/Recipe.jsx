import React, { useState } from "react";
import styled from "styled-components";

export const StyledRecipe = styled.div`
  position: relative;
  grid-area: recipe;
  border-top-right-radius: 50%;
  background-color: #f6c851;
`;

export const Paper = styled.div`
  position: relative;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px #888;

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
  font-size: 16px;
`;

const Recipe = ({ clicked }) => {
  return (
    <StyledRecipe>
      {clicked && (
        <>
          <Paper>
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
                <p>Step 6: Now you have limoncello! Enjoy!</p>
              </Content>
            </Pattern>
          </Paper>
        </>
      )}
    </StyledRecipe>
  );
};

export default Recipe;
