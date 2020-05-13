import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

  background-color: #ef5350;
`;

const Logo = styled.img`
  margin: 1vh 0;

  height: 8vh;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        alt="header-image"
      />
    </StyledHeader>
  );
};

export default Header;
