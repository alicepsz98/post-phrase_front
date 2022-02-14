import styled from 'styled-components';

export const HomeContainer = styled.div`
  text-align: center;
  background: #cbcbcb;
`;
export const CreatePostBox = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  background: pink;
  input {
    padding: 10px;
    width: 60%;
    margin: 5px auto 5px auto;
  }
`;
export const PostCards = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  div {
    width: 300px;
    padding: 5px;
    background: white;
  }
`;