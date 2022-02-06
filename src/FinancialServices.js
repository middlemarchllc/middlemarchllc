import { Modal} from 'react-bootstrap';
import './FinancialServices.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FinancialServicesPopover from './FinancialServicesPopover'

const FinancialServices = (props) => {
  return (
    <Modal
      scrollable={false}
      {...props}
      size="lg"
      aria-labelledby="Financial Services Modal"
      DialogClassName="modal-90w"
    >
      <i className="far fa-times-circle fa-3x finserv-modal-close" onClick={props.onHide}></i>
      <Modal.Header>
        <Modal.Title>
          <p className="finserv-modal-header">FINANCIAL SERVICES</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container fluid style={{ padding: "0", margin: "0" }}>
          <Row>
            <Col className="finserv-col">
              <FinancialServicesPopover />
              </Col>
            <Col className="finserv-col">
              <div className="finserv-text">Middlemarch Partners have deep domain expertise in financial services, where its partners have served as investment bankers, private equity investors, and fintech business operators for the last 30 years.</div>
              <div className="finserv-text">Middlemarch Partners have supported the growth of both public and privately-held financial services companies in fintech, alternative finance, capital markets, and transaction processing through capital raises, M&amp;A, and post-transaction advisory services.</div>
            </Col>
         </Row>
       </Container>
      </Modal.Body>
    </Modal>
  );
}
export default FinancialServices;