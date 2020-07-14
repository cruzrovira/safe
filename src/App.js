import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/header";
import Form from "./components/form";
import Summary from "./components/summary";
const CardStyled = styled.div`
  background: #f1f1f1;
  margin: auto;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0px 10px 15px 10px;

  @media screen and (min-width: 400px) {
    width: 400px;
  }
`;

function App() {
  let [safe, setSafe] = useState(null);
  const addSafe = (item) => {
    setSafe(item);
  };
  return (
    <CardStyled>
      <Header title={"Fade."} />
      <Form addSafe={addSafe} />
      {safe ? <Summary safe={safe} /> : null}
    </CardStyled>
  );
}

export default App;
