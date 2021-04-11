import React, { Component } from "react";
import { Container, Form, Message, Segment } from "semantic-ui-react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  };

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    
    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <Container class="bg-container" fluid>
        <Container textAlign="center">
          <Segment inverted>
            <Form inverted onSubmit={this.handleSubmit} netlify name="contact" data-cy="contact-form">
              <Form.Input type="hidden" name="form-name" value="contact" />
              <p>
                <label>
                  Your Name:
                  <Form.Input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    data-cy="name-input"
                    placeholder="Name"
                    required
                  />
                </label>
              </p>
              <p>
                <label>
                  Your email:
                  <Form.Input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    data-cy="email-input"
                    placeholder="Email"
                    required
                  />
                </label>
              </p>
              <p>
                <label>
                  Message:
                  <textarea 
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                    data-cy="msg-input"
                    placeholder="Message"
                  />
                </label>
              </p>
              <Message 
                success
                header="Ready To Submit"
              />
              <p>
                <Form.Button type="submit" data-cy="submit-btn" content="Send" />
              </p>
            </Form>
          </Segment>
        </Container>
      </Container>
    )
  }
}

export default ContactForm

