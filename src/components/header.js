import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.h1`
  color: #0d47a1;
  text-align: center;
`;

const Header = ({ title }) => {
  return <HeaderStyled>{title}</HeaderStyled>;
};

export default Header;
