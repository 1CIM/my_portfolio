import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import axios from "axios";

class Cv extends Component {
  state = {
    cvContent: [],
  };

  render() {
    const { cvContent } = this.state;

    let cvList = cvContent.map((content) => {
      return (
        <div data-cy={`cv-${content.id}`} id={`cv-${content.id}`} key={content.id}>
          <h3>Previous Jobs:</h3>
          <p data-cy="job-xp">{content.job}</p>
          <br/>
          <h3>Educations:</h3>
          <p data-cy="prev-educ">{content.education}</p>
        </div>
      );
    });

    return (
      <Container  class="bg-container" fluid>
        <Image data-cy="cv-bg" id="background" src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" fluid centered />
        <Container textAlign="center">
          <h1 data-cy="cv-header" id="cv-header">My CV</h1>
          {cvList}
        </Container>
      </Container>

    )
  };
  componentDidMount() {
    axios.get("./data/cv.json").then((response) => {
      this.setState({ cvContent: response.data });
    });
  };
};

export default Cv