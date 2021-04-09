import React from "react";
import { Container, Image } from "semantic-ui-react";

const Hello = () => {
  return (
    <Container class='bg-container' fluid >
      <Image id='background' src='https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1870&q=80' fluid centered vh vw />
    </Container>
  );
};

export default Hello;