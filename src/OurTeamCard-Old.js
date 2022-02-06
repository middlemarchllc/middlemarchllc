import './OurTeam.css';
import { Modal } from 'react-bootstrap';

const OurTeamCard = (props) => {

  const isOpen = props.selectedModal === props.person.id;
  const openModal = () => props.setSelectedModal(props.person.id);
  const closeModal = () => props.setSelectedModal(0);

  return (

    <div className="col-lg-6 col-12 ml-auto mr-auto">
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
                window.open(`${props.person.email}`)
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
            <div><p className="team-modal" style={{ color: "var(--heading-medium)"}}><em><strong>Expertise: </strong>{props.person.expertise}</em></p></div>
            <ul className="no-bullets">
              {props.person.paragraphs.map((fact, i) => (
                <li key={i}><p className="team-modal">{fact}</p> </li>
              ))}
            </ul>
          </div>
        </Modal.Body>
      </Modal>
      <div className="card card-profile overflow-hidden border-0">
        <div className="row" onClick={openModal}>
          <div className="col-lg-4 col-md-6 col-12 pe-lg-0">
            <div className="pe-md-0">
              <img className="w-100 border-radius-md team-member" src={props.person.photo} alt={`${props.person.name}`} onClick={openModal} />
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
            <div className="card-body">
              <h2 className="team-card-name">{props.person.name}</h2>
              <h3 className="team-card-title">{props.person.title}</h3>
              {/* <div className="mb-4 mt-1 team-card-icon"> */}
                {/* <i className="fas fa-envelope-square" style={{ cursor: "pointer" }}></i>&nbsp;&nbsp; */}
                {/* <i className="fas fa-phone" style={{ cursor: "pointer" }}></i>&nbsp;&nbsp; */}
                {/* <i className="fab fa-linkedin" style={{ cursor: "pointer" }}></i> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default OurTeamCard;