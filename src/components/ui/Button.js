import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => {
    if (props.submit) return "blue";
    if (props.error) return "red";
    return "white";
  }};
  color: ${(props) => {
    if (props.submit) return "white";
    if (props.error) return "white";
    return "black";
  }};
  padding: 10px 30px;
  border-radius: 3px;
`;
