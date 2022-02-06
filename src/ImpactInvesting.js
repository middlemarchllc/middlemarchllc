import { Modal} from 'react-bootstrap';
import './ImpactInvesting.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImpactInvestingPopover from './ImpactInvestingPopover'

const ImpactInvesting = (props) => {
  return (
    <Modal
      scrollable={false}
      {...props}
      size="lg"
      aria-labelledby="Impact Investing Modal"
      DialogClassName="modal-90w"
    >
      <i className="far fa-times-circle fa-3x impinvest-modal-close" onClick={props.onHide}></i>
      <Modal.Header>
        <Modal.Title>
          <p className="impinvest-modal-header">IMPACT INVESTING</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
       <Container fluid>
         <Row>
            <Col className="impinvest-col">
              <ImpactInvestingPopover />
              </Col>
            <Col className="impinvest-col">
              <div className="impinvest-text">Impact investing, for Middlemarch Partners, involves businesses that create measurable economic improvements to our environment and our society.</div>
              <div className="impinvest-text">Middlemarch Partners' impact investing efforts focus on environmental services as well as businesses that generate strong profits while addressing social and governance objectives as well.</div>
            </Col>
         </Row>
       </Container>







      </Modal.Body>
    </Modal>
  );
}
export default ImpactInvesting;