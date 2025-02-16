import './OurTeam.css';
import { Modal, Row, Col, Card } from 'react-bootstrap';

const OurTeamCard = (props) => {

  const isOpen = props.selectedModal === props.person.id;
  const openModal = () => props.setSelectedModal(props.person.id);
  const closeModal = () => props.setSelectedModal(0);

  return (

    <div>
      <Modal
        show={isOpen}
        onHide={closeModal}
        dialogClassName="modal-90w"
        aria-labelledby="individual-team-member"
      >
        <i className="far fa-times-circle fa-3x team-modal-close" onClick={closeModal}></i>
        <Modal.Header>
          <Modal.Title id={props.person.id}>
            <p className="team-modal-header">&nbsp;&nbsp; {props.person.name} | {props.person.title} &nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fas fa-envelope-square" style={{ cursor: "pointer" }} onClick={(e) => {
                e.preventDefault();
                window.open(`mailto:${props.person.email}`)
              }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fas fa-phone" style={{ cursor: "pointer" }} >
                <span className="tooltiptext" style={{ fontFamily: "var(--main-font)", fontWeight: "500", fontSize: "2.5rem" }}>{props.person.phone}</span>
              </i>&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fab fa-linkedin" style={{ cursor: "pointer" }} onClick={(e) => {
                e.preventDefault();
                window.open(`${props.person.linkedin}`)
              }}></i>
            </p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{ textAlign: "left", margin: "16px" }}>
            <img style={{ float: "left", marginRight: "24px" }} className="w-25 border-radius-md" src={props.person.photo} alt={props.person.name} />
            {props.person.expertise && (<div><p className="team-modal" style={{ color: "var(--heading-medium)" }}><em><strong>Expertise: </strong>{props.person.expertise}</em></p></div>)}
            <ul className="no-bullets">
              {props.person.paragraphs.map((fact, i) => (
                <li key={i}><p className="team-modal">{fact}</p> </li>
              ))}
            </ul>
          </div>
        </Modal.Body>
      </Modal>




      <Card className="team-card" style={{ border: "1px solid var(--heading-dark)", cursor:"pointer" }}>
        <Card.Img style={{ width: "100%", cursor: "pointer" }} variant="top" src={props.person.photo} alt={`${props.person.name}`} onClick={openModal} />
        <Card.Body style={{ minHeight: "15rem", cursor: "pointer" }} onClick={openModal}>

          <h2 className="team-card-name">{props.person.name}</h2>
          <h3 className="team-card-title">{props.person.title}</h3>

        </Card.Body>
        <Card.Footer>
          <div className="team-card-icon">
            <i className="fas fa-envelope-square" style={{ cursor: "pointer" }} onClick={(e) => {
              e.preventDefault();
              window.open(`mailto:${props.person.email}`)
            }}></i> &nbsp;&nbsp;
            <i className="fas fa-phone" style={{ cursor: "pointer" }}><span className="cardtiptext" style={{ fontFamily: "var(--main-font)", fontWeight: "500", fontSize: "1.5rem" }}>{props.person.phone}</span></i>&nbsp;&nbsp;
            <i className="fab fa-linkedin" style={{ cursor: "pointer" }} onClick={(e) => {
              e.preventDefault();
              window.open(`https://${props.person.linkedin}`)
            }}></i>
          </div>
        </Card.Footer>
      </Card>


    </div>

  )
}
export default OurTeamCard;