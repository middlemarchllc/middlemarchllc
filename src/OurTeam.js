import './OurTeam.css';
import OurTeamCard from './OurTeamCard';
import {team} from './data/team.js';
import { useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';


const OurTeam = (props) => {

  const [selectedModal, setSelectedModal] = useState(0);

  return (

    <section id="ourteam" className="team team-section" >
      <div className="team-main">
        <div className="team-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>Our Team</h2>
        </div>
        {/* ============================================================================ */}

        {/* <div className="team-card-div"> */}
          {/* <div className="row g-5 p-5"> */}
          {/* <Row md={2} lg={3} xl={4} className="g-5 p-5"> */}
        <CardGroup style={{ margin: "2rem 15rem", padding: "2rem", justifyContent: "center", alignContent: "center"}}>
          {team.map(person =>
            <OurTeamCard
              key={person.id}
              selectedModal={selectedModal}
              setSelectedModal={setSelectedModal}
              person={person}
            />
            )}
            </CardGroup>
          {/* </Row> */}

          </div>
        {/* </div> */}
      {/* </div> */}
    </section>
  )
}

export default OurTeam;