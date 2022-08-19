import React from "react";
import styled from "styled-components";

const Resume = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &> h1{
    font-size: 3rem;
    margin-bottom: auto;
  }
`;

export default function Balance() {
  return (
    <>
      <Resume>
        <h1>Your acount balance is :</h1>
        <h2>$ 100,000.00</h2>
      </Resume>
    </>
  );
}
