import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  background: grey;
  color: white;
  border-bottom: 1px solid black;
  position: fixed;
`;
export const HeaderContent = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    padding: 7px;
    cursor: pointer;
    box-shadow: 1px 1px 2px black;
  }
`;
export const Logo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  img {
    width: 40px;
  }
`