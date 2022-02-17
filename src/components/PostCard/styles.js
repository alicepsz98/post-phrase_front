import styled from "styled-components";

export const Container = styled.div` 
  padding: 15px;
  background: #005428;
  color: white;
  font-size: 18px;
  width: 48.7%;
  color: #3ffc99;
  text-align: left;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  div {
    display: flex;
    gap: 10px;
  }
  h3, .authorName {
    text-transform: capitalize;
  }
  p {
    color: white;
  }
  h5 {
    text-align: right;
    font-size: 16px;
    font-weight: 300;
  }
  @media (max-width: 826px) {
    width: 100%;
  }
`;