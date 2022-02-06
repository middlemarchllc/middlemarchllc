import './OurInvestors.css';
import logo from './images/logo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Backendless from 'backendless';

Backendless.initApp('3F6FD799-4DA3-DCEA-FFA6-A9D2380E0C00', 'F5CD099F-5472-4A4A-872E-D4432A045F68')

const bodyParts = new Backendless.Bodyparts()

const OurInvestors = (props) => {

  const [values, setValues] = useState({ investorName: '', investorEmail: '', investorPhone: '' })
  const [showBecome, setShowBecome] = useState(false);
  const [showPartner, setShowPartner] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const onSuccess = status => {
    // console.log('HTML email has been sent');
    setValues({ investorName: '', investorEmail: '', investorPhone: '' });
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
    `<div style="font-size: 16px; font-family:verdana;"><div style="background-color:#1C2C55; margin-top: 16px; width: 300px; color:white;">NEW CAPITAL PARTNER REQUEST</div><div style="color:#1C2C55;"><strong>NAME: </strong>${values.investorName}</div><div style="color:#1C2C55;"><strong>EMAIL: </strong>${values.investorEmail}</div><div style="color:#1C2C55;"><strong>PHONE: </strong>${values.investorPhone}</div> </div>`;

  bodyParts.htmlmessage = data;

  const subject = 'Someone Wants to be a Middlemarch Capital Partner!';
  const recipient = ['jodimsilverman@gmail.com', 'sgrutman@middlemarchllc.com', 'dpapademetriou@middlemarchllc.com'];

  return (

    <section id="investors" className="investors our-investors-section" >
      <div className="investors-main">
        <div className="investors-header">
          <h2 className="heading-primary-dk">Our Investors</h2>
        </div>
        {/* ============================================================================ */}
        <div className="invest-container">
          <Container fluid className="g-0 align-items-center">
            <Row className="g-0">
              <Col md={12} lg={6} className="g-0 align-self-center">
                <div className="mm-logo"><img src={logo} alt="logo" className="mm-logo-box" /></div>
              </Col>
              <Col md={12} lg={6} className="g-0">
                <div className="investors-input-box">
                  <div className="investor-form-heading" style={{ paddingTop: "1.5rem" }}>
                    Middlemarch Capital Partners Login
                  </div>
                  <Form className="investor-form-box">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label style={{ fontSize: "1.5rem" }}>Email address</Form.Label>
                      <Form.Control
                        name="partnerName"
                        value={values.partnerName}
                        type="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        style={{ fontSize: "1.5rem" }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label style={{ fontSize: "1.5rem" }}>Password</Form.Label>
                      <Form.Control
                        name="partnerPwd"
                        value={values.partnerPwd}
                        type="password"
                        placeholder="Password"
                        onChange={handleInputChange}
                        style={{ fontSize: "1.5rem" }}
                      />
                    </Form.Group>

                    <Button
                      size="md"
                      variant="primary"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPartner(true);
                      }}
                    >
                      SUBMIT
                    </Button>
                  </Form>
                  {/* =========== CONFIRMATION PARTNER LOGIN ============ */}
                  {showPartner ?
                    <Alert
                      variant="danger"
                      onClose={() => setShowPartner(false)}
                      dismissible
                    >
                      <Alert.Heading>INVALID EMAIL OR PASSWORD!</Alert.Heading>
                      <p>
                        Please contact Middlemarch Partners to reset your account.
                      </p>
                    </Alert>
                    : null}
                  {/* =========== CONFIRMATION PARTNER LOGIN ============ */}


                  {/* =========== CONFIRMATION BECOME A PARTNER ============ */}
                  {showBecome ?
                    <Alert
                      variant="success"
                      onClose={() => setShowBecome(false)}
                      dismissible
                    >
                      <Alert.Heading>THANK YOU!!</Alert.Heading>
                      <p>
                        You have successfully sent your request!
                      </p>
                    </Alert>
                    : null}
                  {/* =========== CONFIRMATION BECOME A PARTNER ============ */}


                  <div className="investor-form-become" style={{ marginTop: "2.5rem" }}>
                    Middlemarch Capital Partner Inquiries
                  </div>
                  <Form className="investor-form-box">
                    <Form.Group className="mb-3" controlId="investorName">
                      <Form.Label style={{ fontSize: "1.5rem" }}>Name</Form.Label>
                      <Form.Control
                        name="investorName"
                        value={values.investorName}
                        type="text"
                        placeholder="Enter First and Last Name"
                        onChange={handleInputChange}
                        style={{ fontSize: "1.5rem" }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="investorEmail">
                      <Form.Label style={{ fontSize: "1.5rem" }}>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="investorEmail"
                        value={values.investorEmail}
                        placeholder="Email"
                        onChange={handleInputChange}
                        style={{ fontSize: "1.5rem" }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="investorTelephone">
                      <Form.Label style={{ fontSize: "1.5rem" }}>Telephone</Form.Label>
                      <Form.Control
                        type="text"
                        name="investorPhone"
                        value={values.investorPhone}
                        placeholder="Telephone"
                        onChange={handleInputChange}
                        style={{ fontSize: "1.5rem" }}
                      />
                    </Form.Group>

                    <Button size="md" variant="primary" type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        sendEmail(subject, bodyParts, recipient);
                        setShowBecome(true);
                      }}>
                      SUBMIT
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>



        {/* ============================================================================ */}
      </div>
    </section >
  )
}

export default OurInvestors;