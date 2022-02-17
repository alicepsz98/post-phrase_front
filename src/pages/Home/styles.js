import styled from "styled-components";

export const HomeContainer = styled.div`
  text-align: center;
  background-color: #9f9d9d;
`;
export const PostCards = styled.div`
  padding: 30px 0;
  width: 46%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
  @media (max-width: 826px) {
    flex-direction: column;
  }
`;