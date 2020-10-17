import styled from "styled-components";

const Buttons = styled.button`
  border-radius: 20px;
  border-color: black;
  background-color: #f1f781;
  width: 100px;
  height: 30px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
Buttons.Container = styled.div`
  margin: auto;
  text-align: center;
`;

export default Buttons;
