import React from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";

// colors:
// 011627
// 4B8F8C
// 856A5D
// FAFAFA
// E3F2FD

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #4b8f8c;
  display: flex;
  max-height: fit-content;
`;

const UserPanel = styled.div`
  margin-left: auto;
  max-height: 50px;
  display: flex;
  color: #fafafa;

  & > p {
    font-size: 2rem;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 2px;
    margin-right: 25px;
  }

  & > h3 {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 15px;
    margin-right: 2px;
    font-weight: 500;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <UserPanel>
        <h3>Login</h3>
        <p>
          <AiOutlineUser />
        </p>
      </UserPanel>
    </Nav>
  );
}
