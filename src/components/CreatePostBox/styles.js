import styled from "styled-components";

export const Container = styled.div`
  width: 46%; 
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  margin-top: 30px;
  padding: 10px;
  background: #bab7b7;
  h2 {
    color: #626161;
    text-align: left;
    @media (max-width: 418px) {
      font-size: 16px;
    }
    @media (max-width: 376px) {
      font-size: 14px;
    }
  }
  input, textarea {
    padding: 10px;
    border: none;
    outline: none;
    background: #e7e6e6;
  }
  button {
    color: #626161;
    width: 190px;
    padding: 10px;
    font-weight: bold;
    font-size: 17px;
    align-self: flex-end;
  }
  p {
    text-align: left;
    margin-top: -7px;
    font-size: 10px;
  }
  @media (max-width: 1686px) {
    width: 60%;
  }
  @media (max-width: 1297px) {
    width: 70%;
  }
  @media (max-width: 1114px) {
    width: 80%;
  }
  @media (max-width: 977px) {
    width: 95%;
  }
`;