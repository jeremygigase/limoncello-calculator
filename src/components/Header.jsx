import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.div`
  grid-area: header;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background-color: #f6c851;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 0;
  font-family: "Helvetica";
  color: white;
  font-weight: bold;
  font-size: 2em;
  padding: 0 0.4em;
  position: relative;

  @media (min-width: 800px) {
    border-top-left-radius: 100%;
    border-top-right-radius: 0;
    align-items: flex-end;
    justify-content: flex-end;
  }

  div {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;

    z-index: 1;

    @media (min-width: 800px) {
      display: none;
    }
  }

  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div class='top left'></div>
      <div class='top right'></div>
      <div class='bottom left'></div>
      <div class='bottom right'></div>
      <p>Limoncello</p>
      <p>Calculator!</p>
    </StyledHeader>
  );
};

export default Header;
