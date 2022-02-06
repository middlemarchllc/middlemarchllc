import './FinancialServices.css';
import middlemarch from './images/icon_only-transparent.svg';
import mktservices from './images/businessServices/marketing_services-dk.svg';
import aiBigData from './images/businessServices/fintech-2-dk.svg';
import regCompliance from './images/businessServices/regulatory_compliance_solutions-dk.svg';
import trainingEd from './images/businessServices/training_and_education-dk.svg';
import transportLog from './images/businessServices/transportation-2-dk.svg';
import busProcess from './images/businessServices/business_process_outsourcing-bk.svg';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


const BusinessServicesPopover = () => {

  const focus1 = (
    <Popover id="focus1" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Marketing Services</Popover.Header>
      <Popover.Body className="popover-text">
        Using data to more effectively identify, acquire, and monetize customers.
      </Popover.Body>
    </Popover>
  );

  const focus2 = (
    <Popover id="focus2" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Artificial Intelligence, Big Data and Analytics</Popover.Header>
      <Popover.Body className="popover-text">
        Vertical-focused software that enables clients to make better decisions and measure results.
      </Popover.Body>
    </Popover>
  );

  const focus3 = (
    <Popover id="focus3" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Regulatory and Compliance Solutions</Popover.Header>
      <Popover.Body className="popover-text">
        Addressing reporting and compliance requirements by leveraging outsourcing, technology, and data.
      </Popover.Body>
    </Popover>
  );

  const focus4 = (
    <Popover id="focus4" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Training and Education Services</Popover.Header>
      <Popover.Body className="popover-text">
        Industry-specific software that enables businesses and organizations to more efficiently transfer and retain knowledge across the organization.
      </Popover.Body>
    </Popover>
  );

  const focus5 = (
    <Popover id="focus5" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Transportation and Logistics</Popover.Header>
      <Popover.Body className="popover-text">
        Utilizing outsourced business models and new modes of transport to deliver more cheaply and more effectively.
      </Popover.Body>
    </Popover>
  );

  const focus6 = (
    <Popover id="focus6" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Business Processing Outsourcing</Popover.Header>
      <Popover.Body className="popover-text">
        Leveraging technology and outsourcing to unlock cost and service advantages vs. incumbent providers.
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
            <Image className="focus-img" src={mktservices} alt="Marketing Services" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item2">
        <OverlayTrigger trigger="hover" placement="left-start" overlay={focus2}>
          <button className="share_btn focus">
            <Image className="focus-img" src={aiBigData} alt="Artificial Intelligence, Big Data and Analytics" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item3">
        <OverlayTrigger trigger="hover" placement="left-start" overlay={focus3}>
          <button className="share_btn focus">
            <Image className="focus-img" src={regCompliance} alt="Regulatory and Compliance Solutions" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item4">
        <OverlayTrigger trigger="hover" placement="top-start" overlay={focus4}>
          <button className="share_btn focus">
            <Image className="focus-img" style={{ marginBottom: "2.0rem" }} src={trainingEd} alt="Training and Education Services" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item5">
        <OverlayTrigger trigger="hover" placement="right-end" overlay={focus5}>
          <button className="share_btn focus">
            <Image className="focus-img" src={transportLog} alt="Transportation and Logistics" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item6">
        <OverlayTrigger trigger="hover" placement="right-end" overlay={focus6}>
          <button className="share_btn focus">
            <Image className="focus-img" src={busProcess} alt="Business Processing Outsourcing" />
          </button>
        </OverlayTrigger>

      </div>
    </div>

  )

}

export default BusinessServicesPopover;