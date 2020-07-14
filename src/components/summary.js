import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { percentBrand, percentPlan, differenceOfYear } from "./helper";
const SummaryStyled = styled.div`
  ul {
    list-style: none;
  }
  h3 {
    color: #0d47a1;
  }
`;

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
