import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
const FormStyled = styled.form`
  label {
    display: block;
  }
  input,
  select {
    border-left: 1px solid #ccc;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ddd;
  }
  select {
    width: 100%;
    line-height: 3em;
    outline: none;
    appearance: none;
    padding-left: 5px;
  }
  input[type="submit"] {
    line-height: 3em;
    width: 6em;
    background: #0d47a1;
    color: #fff;
    border: none;
    cursor: pointer;

    outline: none;
  }
  .error {
    color: red;
    margin: 0;
  }
  input[type="submit"]:active {
    transform: scale(0.8);
  }
  .form-control {
    margin-bottom: 8px;
  }
`;

const Form = ({ addSafe }) => {
  const { register, handleSubmit, errors } = useForm();

  const save = (data, e) => {
    data.year = parseInt(data.year);
    addSafe(data);
    e.target.reset();
  };

  let year_init = new Date().getFullYear();

  return (
    <FormStyled onSubmit={handleSubmit(save)}>
      <div className="form-control">
        <label htmlFor="brand">Brand*:</label>
        <select
          name="brand"
          id="brand"
          ref={register({ required: true })}
          defaultValue=""
        >
          <option value="" disabled>
            ---Select Brand---
          </option>
          <option value="American">American</option>
          <option value="Europa">Europa</option>
          <option value="Asia">Asia</option>
        </select>

        {errors.brand && <p className="error">Brand is required</p>}
      </div>
      <div className="form-control">
        <label htmlFor="year">Year*:</label>

        <select
          name="year"
          id="year"
          defaultValue=""
          ref={register({ required: true })}
        >
          <option value="" disabled>
            ---Select Year---
          </option>
          {Array(11)
            .fill()
            .map((_, i) => (
              <option key={i} value={year_init - i}>
                {year_init - i}
              </option>
            ))}
        </select>
        {errors.year && <p className="error">Year is required</p>}
      </div>
      <div className="form-control">
        <label htmlFor="">Plan*</label>
        <input
          type="radio"
          name="plan"
          value="Basic"
          defaultChecked
          ref={register({ required: true })}
        />{" "}
        Basic
        <input
          type="radio"
          name="plan"
          value="Full"
          ref={register({ required: true })}
        />{" "}
        Full
        {errors.plan && <p className="error">Plan is required</p>}
      </div>
      <input type="submit" value="send" />
    </FormStyled>
  );
};
Form.propTypes = {
  addSafe: PropTypes.func.isRequired,
};
export default Form;
