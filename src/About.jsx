import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <UndrawDesignerLife primaryColor='#12283a' height='200px' />
          </Grid.Column>
          <Grid.Column>
            <h1 id="about-header">About Me</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eligendi deserunt, commodi ullam unde a at cumque pariatur debitis quos qui? Corporis officia voluptatem sint nam? A perferendis explicabo quis.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default About
