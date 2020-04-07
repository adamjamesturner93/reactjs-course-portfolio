import React from "react";
import {
  Form,
  InputGroup,
  InputLabel,
  InputText,
  InputTextArea,
} from "./Contact.styles";
import { Button } from "../../components/ui/Button";

const Contact = () => {
  return (
    <Form>
      <h1>Get in Touch!</h1>
      <InputGroup>
        <InputLabel htmlFor="name">Name</InputLabel>
        <InputText name="name" type="text" />
      </InputGroup>
      <InputGroup>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputText name="email" type="email" />
      </InputGroup>
      <InputGroup>
        <InputLabel htmlFor="message">Message</InputLabel>
        <InputTextArea name="message" />
      </InputGroup>
      <Button submit type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
