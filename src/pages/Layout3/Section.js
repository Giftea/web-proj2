import React, { Component } from "react";
import { Container, Row, Col, Form, Input ,Button} from "reactstrap";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-home bg-light home-bg-3" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={8}>
                    <div className="home-content text-center">
                      <h1 className="home-title mt-4">Focus on being More Product <br /> with <span className="text-primary">Thamza</span> </h1>
                      <p className="text-muted mt-4 f-20">Vestibulum egestas magna ut aliquet sodales massa.</p>
                      <div className="mt-5">
                        <div className="search-form">
                          <Form action="#">
                            <Input type="email" placeholder="Email" style={{ height: 'unset' }}/>
                            <Button color="primary" className="btn btn-primary">SubCribe</Button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
