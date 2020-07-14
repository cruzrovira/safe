import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const HeaderStyled = styled.h1`
  color: #0d47a1;
  text-align: center;
`;

const Header = ({ title }) => {
  return <HeaderStyled>{title}</HeaderStyled>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
