import styled from "styled-components";

export const Form = styled.form`
  padding: 3% 10%;
  box-shadow: 0 0 20px 0 #333333;
  background-color: white;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const InputGroup = styled.section`
  display: flex;
  margin: 20px 0;
`;

export const InputLabel = styled.label`
  width: 100px;
`;

export const InputText = styled.input`
  width: 200px;
  border: 1px solid lightgray;
`;

export const InputTextArea = styled.textarea`
  width: 200px;
  border-color: lightgray;
`;
