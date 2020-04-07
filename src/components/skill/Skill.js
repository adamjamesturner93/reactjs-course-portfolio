import React from "react";
import { Button } from "../ui/Button";

// eslint-disable-next-line react/prop-types
const Skill = ({ title, onDelete, children }) => {
  console.log(children);

  return (
    <section style={{ padding: "20px 0" }}>
      <h2>{title}</h2>
      {children}
      <Button onClick={onDelete}>Delete</Button>
    </section>
  );
};

export default Skill;
