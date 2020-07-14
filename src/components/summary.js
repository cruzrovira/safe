import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const SummaryStyled = styled.div`
  ul {
    list-style: none;
  }
  h3 {
    color: #0d47a1;
  }
`;
const percentBrand = (brand) => {
  switch (brand) {
    case "American":
      return 0.15;
    case "Europa":
      return 0.05;
    case "Asia":
      return 0.3;
    default:
      break;
  }
};

const percentPlan = (plan) => {
  switch (plan) {
    case "Basic":
      return 0.2;
    case "Full":
      return 0.5;
    default:
      break;
  }
};
const differenceOfYear = (year) => {
  let year_init = new Date().getFullYear();
  return year_init - year;
};

const Summary = ({ safe }) => {
  let { brand, year, plan } = safe;
  let base = 2000;
  let total =
    base +
    base * percentBrand(brand) +
    base * percentPlan(plan) +
    base * 0.03 * differenceOfYear(year);
  return (
    <SummaryStyled>
      <h3>Sumary</h3>
      <ul>
        <li>Brand: {brand}</li>
        <li>Year: {year}</li>
        <li>Plan: {plan}</li>
        <li>Total: ${total.toFixed(2)}</li>
      </ul>
    </SummaryStyled>
  );
};
Summary.propTypes = {
  safe: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    plan: PropTypes.string.isRequired,
  }),
};
export default Summary;
