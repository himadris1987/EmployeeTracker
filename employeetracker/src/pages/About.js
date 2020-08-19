import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to Square Eineck's Employee Search Engine</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Using the nav bar, scroll over to search to start searching the databse for all employees working at the company
            </p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;