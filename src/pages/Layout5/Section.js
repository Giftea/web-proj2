import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Modal Video
import ModalVideo from "react-modal-video";

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
    var temsettings = {
      autoplay: true,
      dots: true,
      speed: 300,
      infinite: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <React.Fragment>
        <section className="bg-home bg-light" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={9}>
                    <div className="main-slider home-content text-center">
                      <ul className="slides">
                        <Slider {...temsettings}>
                          <li>
                            <h3 className="home-title">We Love Make Things Amazing And Simple</h3>
                            <p className="text-muted f-18 mt-3">Varius congue neque sed ornare nisi vestibulum at pellentesque lectus leo <br /> interdum 
                                            dictum pharetra sed mattis eu sem.</p>
                            <div className="mt-4 pt-3">
                              <Link to="#" className="btn btn-primary mr-3">Contact Us</Link>
                              <Link to="#" className="video-play-icon text-dark" onClick={this.openModal}> <i className="mdi mdi-play-circle-outline text-dark mr-2"></i>Watch Intro Video</Link>
                            </div>
                          </li>
                          <li>
                            <h3 className="home-title">Create Amazing Landing Page With Thamza</h3>
                            <p className="text-muted f-18 mt-3">Varius congue neque sed ornare nisi vestibulum at pellentesque lectus leo <br /> interdum 
                                            dictum pharetra sed mattis eu sem.</p>
                            <div className="mt-4 pt-3">
                              <Link to="#" className="btn btn-primary mr-3">Contact Us</Link>
                              <Link to="#" className="video-play-icon text-dark" onClick={this.openModal}> <i className="mdi mdi-play-circle-outline text-dark mr-2"></i>Watch Intro Video</Link>
                            </div>
                          </li>
                          <li>
                            <h3 className="home-title">Perfact Solution For Small <br /> Businesses</h3>
                            <p className="text-muted f-18 mt-3">Varius congue neque sed ornare nisi vestibulum at pellentesque lectus leo <br /> interdum 
                                            dictum pharetra sed mattis eu sem.</p>
                            <div className="mt-4 pt-3">
                              <Link to="#" className="btn btn-primary mr-3">Contact Us</Link>
                              <Link to="#" className="video-play-icon text-dark" onClick={this.openModal}> <i className="mdi mdi-play-circle-outline text-dark mr-2"></i>Watch Intro Video</Link>
                            </div>
                          </li>
                        </Slider>
                      </ul>
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
