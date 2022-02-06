import { Modal} from 'react-bootstrap';
import './BusinessServices.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BusinessServicesPopover from './BusinessServicesPopover'

const BusinessServices = (props) => {
  return (
    <Modal
      scrollable={false}
      {...props}
      size="lg"
      aria-labelledby="Business Services Modal"
      DialogClassName="modal-90w"
    >
      <i className="far fa-times-circle fa-3x busserv-modal-close" onClick={props.onHide}></i>
      <Modal.Header>
        <Modal.Title>
          <p className="busserv-modal-header">BUSINESS SERVICES AND SOFTWARE</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
       <Container fluid>
         <Row>
            <Col className="busserv-col">
              <BusinessServicesPopover />
              </Col>
            <Col className="busserv-col">
              <div className="busserv-text">Middlemarch Partners has facilitated multiple public and private transactions in business services, both as bankers and as private equity investors.</div>
              <div className="busserv-text">The firm has focused on fast-growing business services companies that are exploiting market dislocations or have developed differentiated service offerings.</div>
            </Col>
         </Row>
       </Container>







      </Modal.Body>
    </Modal>
  );
}
export default BusinessServices;