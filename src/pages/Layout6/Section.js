import React, { Component } from "react";
import { Container, Row, Col, Form, Label, Input ,Button } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";

//import images
import HomeUrl from '../../assets/images/home-border.png';

class Section extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-home bg-light" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div className="home-content">
                      <p className="mb-0">Digital Marketing</p>
                      <img src={HomeUrl} height="15" alt="" />
                      <h1 className="home-title mt-4">Grow Your <br /> Business Google Ads & Instagram Ads</h1>
                      <p className="text-muted mt-4 f-20">Vestibulum egestas magna ut aliquet sodales nunc
                      fermentum ligula
                                    quis tidunt vitae massa.</p>
                      <div className="mt-4 pt-2">
                        <Link to="#" className="btn btn-primary mr-3">Contact Us</Link>
                        <Link to="#" className="video-play-icon text-dark" onClick={this.openModal}>
                          <i className="mdi mdi-play-circle-outline text-dark mr-2"></i>Watch Intro Video
                          </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={5} className="offset-lg-1">
                    <div className="home-registration-form bg-white p-5 mt-4">
                      <h5 className="form-title mb-4 text-center font-weight-bold">Get 30 day FREE Trial</h5>
                      <Form className="registration-form">
                        <Label className="text-muted">
                          First Name
                            </Label>
                        <Input type="text" id="exampleInputName1" className="form-control mb-4 registration-input-box" />
                        <Label className="text-muted">
                          Last Name
                            </Label>
                        <Input type="text" id="exampleInputName2" className="form-control mb-4 registration-input-box" />
                        <Label className="text-muted">
                          Email
                            </Label>
                        <Input type="email" id="exampleInputEmail1" className="form-control mb-4 registration-input-box" />
                        <Button color="primary" className="btn btn-primary w-100" block>Free Trial</Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Container>
              <ModalVideo
                channel="vimeo"
                isOpen={this.state.isOpen}
                videoId="99025203"
                onClose={() => this.setState({ isOpen: false })}
              />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
