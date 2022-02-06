import './FinancialServices.css';
import middlemarch from './images/icon_only-transparent.svg';
import altEnergy from './images/impactInvesting/alternative_energy-dk.svg';
import transportation from './images/impactInvesting/transportation-dk.svg';
import ecology from './images/impactInvesting/inpact_investment-dk.svg';
import waste from './images/impactInvesting/waste_to_recycle-dk.svg';
import social from './images/impactInvesting/equality-dk.svg';
import diversity from './images/impactInvesting/diversity-dk.svg';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


const ImpactInvestingPopover = () => {

  const focus1= (
    <Popover id="focus1" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Waste to Recycling</Popover.Header>
      <Popover.Body className="popover-text">
        Investing in technology and processes to convert waste into energy and other saleable products that recycle waste and capture carbon.
      </Popover.Body>
    </Popover>
  );

  const focus2 = (
    <Popover id="focus2" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Alternative Energy</Popover.Header>
      <Popover.Body className="popover-text">
        Support energy production alternatives to fossil fuels, including solar, wind, and biologic processes.
      </Popover.Body>
    </Popover>
  );

  const focus3 = (
    <Popover id="focus3" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Ecology Friendly Agriculture</Popover.Header>
      <Popover.Body className="popover-text">
        Investing in agriculture that has economic, environmental, and social benefits.
      </Popover.Body>
    </Popover>
  );

  const focus4 = (
    <Popover id="focus4" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Transportation</Popover.Header>
      <Popover.Body className="popover-text">
        Deploying capital in electric transportation modes that address societal transportation needs while minimizing environmental impacts.
      </Popover.Body>
    </Popover>
  );

  const focus5 = (
    <Popover id="focus5" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Socially Responsible Investment Solutions</Popover.Header>
      <Popover.Body className="popover-text">
        Businesses solely focused on the support and monitoring of successful implementations of ESG policies and procedures across organizations.
      </Popover.Body>
    </Popover>
  );

  const focus6 = (
    <Popover id="focus6" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Diversity Advancement</Popover.Header>
      <Popover.Body className="popover-text">
        Companies that care about the advancement of women, people of color, and special interest groups.
      </Popover.Body>
    </Popover>
  );
  return (

    <div className="grid-container">

      <div className="item0">
        <button className="mm_btn">
        <Image className="mm" src={middlemarch} alt="middlemarch" />
        </button>
      </div>

      <div className="item1">
        <OverlayTrigger trigger="hover" placement="bottom-start" overlay={focus1}>
          <button className="share_btn focus">
            <Image className="focus-img" style={{ marginBottom: "2.0rem" }} src={waste} alt="business services" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item2">
        <OverlayTrigger trigger="hover" placement="left-start" overlay={focus2}>
          <button className="share_btn focus">
            <Image className="focus-img" src={altEnergy} alt="specialty finance" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item3">
        <OverlayTrigger trigger="hover" placement="left-start" overlay={focus3}>
          <button className="share_btn focus">
            <Image className="focus-img" src={ecology} alt="electronic cap" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item4">
        <OverlayTrigger trigger="hover" placement="top-start" overlay={focus4}>
          <button className="share_btn focus">
            <Image className="focus-img" src={transportation} alt="transaction processing" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item5">
        <OverlayTrigger trigger="hover" placement="right-end" overlay={focus5}>
          <button className="share_btn focus">
            <Image className="focus-img" src={social} alt="asset management" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item6">
        <OverlayTrigger trigger="hover" placement="right-end" overlay={focus6}>
          <button className="share_btn focus">
            <Image className="focus-img" src={diversity} alt="fintech" />
          </button>
        </OverlayTrigger>

      </div>
    </div>

  )

}

export default ImpactInvestingPopover;