import './ContactUs.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Backendless from 'backendless';

Backendless.initApp('3F6FD799-4DA3-DCEA-FFA6-A9D2380E0C00', 'F5CD099F-5472-4A4A-872E-D4432A045F68')

const bodyParts = new Backendless.Bodyparts()

const ContactUs = (props) => {

  const [values, setValues] = useState({ joinname: '', joinemail: '', joinphone: '' })
  const [showBecome, setShowBecome] = useState(false);
  const [showPartner, setShowPartner] = useState(false);


  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const onSuccess = status => {
    // console.log('HTML email has been sent');
    setValues({ joinname: '', joinemail: '', joinphone: '' });
  }

  const onError = error => {
    console.error('Server reported an error: ', error.message)
    console.error('error code: ', error.code)
    console.error('http status: ', error.status)
  }

  const sendEmail = (subject, bodyParts, recipient) => {
    Backendless.Messaging.sendEmail(subject, bodyParts, recipient)
      .then(onSuccess)
      .catch(onError)
  }

  const data =
    `<div style="font-size: 16px; font-family:verdana;"><div style="background-color:#1C2C55; margin-top: 16px; width: 300px; color:white;">NEW MAILING LIST REQUEST</div><div style="color:#1C2C55;"><strong>NAME: </strong>${values.joinname}</div><div style="color:#1C2C55;"><strong>EMAIL: </strong>${values.joinemail}</div><div style="color:#1C2C55;"><strong>PHONE: </strong>${values.joinphone}</div> </div>`;

  bodyParts.htmlmessage = data;

  const subject = 'Someone Wants to Be on the Middlemarch Mailing List!';
  const recipient = ['jodimsilverman@gmail.com', 'sgrutman@middlemarchllc.com', 'dpapademetriou@middlemarchllc.com'];

  return (

    <section id="contactus" className="contact contact-section" >
      <div className="contact-main">
        <div className="contact-header">
          <h2 className="heading-primary-dk" style={{ color: "white"}}>CONTACT US</h2>
        </div>
        {/* ============================================================================ */}

         <Container className="contact-container" >
          <Row md={1} lg={2} xl={3} className="contact-row">

            <Col className="contact-left">
              <Card style={{ background: "none"}}>
                <Card.Body>
                  <Card.Title className="contact-card-title">CONNECTICUT OFFICE</Card.Title>
                  <Card.Text className="contact-card-text">
                      700 Canal Street, Suite 148
                      <br></br>
                      Stamford, Connecticut 06902
                      <br></br>
                  </Card.Text>
                  <Card.Text className="contact-card-text">
                    <i className="fas fa-envelope-square" style={{ cursor: "pointer" }} onClick={(e) => {
                      e.preventDefault();
                      window.open("mailto:info@middlemarchllc.com")
                    }}></i>&nbsp;&nbsp;&nbsp;&nbsp;info@middlemarchllc.com
                    <br></br>
                    <i className="fas fa-phone" ><span className="map-phone">&nbsp;&nbsp;&nbsp;&nbsp;212-913-9660</span></i>
                  </Card.Text>
                    <div className="gmap-div">
                    <iframe title="Connecticut Office" className="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.11358640147!2d-73.53422348482826!3d41.04464507929712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c29f61d87b8a65%3A0x6237354b63450802!2s700%20Canal%20St%2C%20Stamford%2C%20CT%2006902!5e0!3m2!1sen!2sus!4v1640475781399!5m2!1sen!2sus" width="325" height="225" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy" />
                    </div>

                </Card.Body>
              </Card>
            </Col>

            <Col className="contact-middle">
              <Card style={{ background: "none"}}>
                <Card.Body>
                  <Card.Title className="contact-card-title">NEW YORK OFFICE</Card.Title>
                  <Card.Text className="contact-card-text">
                    125 Park Avenue, Suite 1700
                    <br></br>
                    New York, New York 10017
                    <br></br>
                  </Card.Text>
                  <Card.Text className="contact-card-text">
                    <i className="fas fa-envelope-square" style={{ cursor: "pointer" }} onClick={(e) => {
                      e.preventDefault();
                      window.open("mailto:info@middlemarchllc.com")
                    }}></i>&nbsp;&nbsp;&nbsp;&nbsp;info@middlemarchllc.com
                    <br></br>
                    <i className="fas fa-phone">&nbsp;&nbsp;&nbsp;&nbsp;<span className="map-phone">212-913-9660</span></i>
                  </Card.Text>
                  <div className="gmap-div" style={{marginBottom: "1.5rem"}}>
                    <iframe title="Connecticut Office" className="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.11358640147!2d-73.53422348482826!3d41.04464507929712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c29f61d87b8a65%3A0x6237354b63450802!2s700%20Canal%20St%2C%20Stamford%2C%20CT%2006902!5e0!3m2!1sen!2sus!4v1640475781399!5m2!1sen!2sus" width="325" height="225" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy" />
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col className="contact-right">

              <Card style={{ background: "none", marginBottom: "2rem" }}>
                <div className="contact-card-box">
                <Card.Body>
                  <Card.Title className="contact-card-join">JOIN OUR MAILING LIST</Card.Title>
                  <Card.Text style={{margin: "1rem 1rem"}}>
                    {showPartner ?
                      <Alert
                        style={{
                          position: "absolute",
                          left: "0%"
                        }}
                        variant="danger"
                        onClose={() => setShowPartner(false)}
                        dismissible
                      >
                        <Alert.Heading style={{textAlign: "left"}}>INVALID EMAIL OR PASSWORD!</Alert.Heading>
                          <p className="contact-alert-p">
                          Please contact Middlemarch Partners to reset your account.
                        </p>
                      </Alert>
                      : null}




                    {showBecome ?
                      <Alert
                        style={{
                          position: "absolute",
                          left: "50%"
                        }}
                        variant="success"
                        onClose={() => setShowBecome(false)}
                        dismissible
                      >
                          <Alert.Heading style={{ textAlign: "left" }}>THANK YOU!!</Alert.Heading>
                          <p className="contact-alert-p">
                          You have successfully sent your request!
                        </p>
                      </Alert>
                      : null}


                    <Form className="contact-form-box" style={{textAlign: "center"}}>
                      <Form.Group className="mb-5" controlId="joinName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          name="joinname"
                          value={values.joinname}
                          type="text"
                          placeholder="Enter First and Last Name"
                          onChange={handleInputChange}
                          style={{ fontSize: "1.5rem", marginBottom: "2rem" }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-5" controlId="joinEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="joinemail"
                          value={values.joinemail}
                          placeholder="Email"
                          onChange={handleInputChange}
                          style={{ fontSize: "1.5rem", marginBottom: "2rem" }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-5" controlId="joinTelephone">
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control
                          type="text"
                          name="joinphone"
                          value={values.joinphone}
                          placeholder="Telephone"
                          onChange={handleInputChange}
                          className="contact-phone"
                        />
                      </Form.Group>

                        <Button size="md" variant="primary" type="submit" style={{ marginTop: "-4rem" }}
                        onClick={(e) => {
                          e.preventDefault();
                          sendEmail(subject, bodyParts, recipient);
                          setShowBecome(true);

                        }}>
                        SUBMIT
                      </Button>
                    </Form>
                  </Card.Text>
                </Card.Body>
                </div>
              </Card>

            </Col>

          </Row>

          <Row className="contact-row">
            <Col className="contact-footer">
              <div className="footer1" style={{ textAlign: "left", marginTop: "2rem" }}>
                <div style={{ margin: "0rem 0rem 1rem 0rem" }}><em>Both Middlemarch Securities LLC and Middlemarch Capital Partners LLC are separate, wholly-owned subsidiaries of Middlemarch Partners LLC.  Securities Offered Through Middlemarch Securities, LLC, Member FINRA, SIPC.</em>
                </div>
                <div style={{ display: "inline", textDecoration: "underline" }}><a href="https://brokercheck.finra.org/firm/summary/283508"><em>BrokerCheck</em></a></div>
                <div style={{ display: "inline" }}>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                <div style={{ display: "inline", textDecoration: "underline" }}>
                  <a href="https://files.brokercheck.finra.org/crs_283508.pdf"><em>FINRA Form CRS</em></a></div>
                <div style={{ marginTop: "1rem" }}><em>Material on this website has been prepared as a matter of general information. Middlemarch and its affiliates, employees, and clients may have recently established or disposed of, or may be establishing or disposing of, positions in securities mentioned. (Middlemarch Securities, LLC 2017)</em></div>
                <div className="copywright"><em>©  2022 Copyright Middlemarch Partners LLC. All Rights Reserved.</em></div>
              </div>
            </Col>
          </Row>
        </Container>
       </div>
    </section>
  )
}

export default ContactUs;