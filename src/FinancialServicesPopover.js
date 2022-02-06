import './FinancialServices.css';
import middlemarch from './images/icon_only-transparent.svg';
import txnprocess from './images/financialServices/transaction_processing-dk.svg';
import fintech from './images/financialServices/fintech-dk.svg';
import assetmgmt from './images/financialServices/asset_management-dk.svg';
import alternativefinance from './images/financialServices/alternative_finance-dk.svg';
import capitalmkts from './images/financialServices/capital_markets-dk.svg';
import blockchain from './images/financialServices/blockchain-dk.svg';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


const IndustryFocusPopover = () => {

  const focus1 = (
    <Popover id="focus1" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Fintech</Popover.Header>
      <Popover.Body className="popover-text">
        Using technology to reshape how financial services are delivered. Focus on both tech-enabled financial services and the associated software platforms that serve the financial services industry across a variety of sub-sectors.
      </Popover.Body>
    </Popover>
  );

  const focus2 = (
    <Popover id="focus2" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Alternative Finance</Popover.Header>
      <Popover.Body className="popover-text">
        Lenders to both consumers and businesses, leveraging technology to gain advantage in cost, speed, and profitability.
      </Popover.Body>
    </Popover>
  );

  const focus3 = (
    <Popover id="focus3" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Transaction Processing</Popover.Header>
      <Popover.Body className="popover-text">
        Innovators using technology to drive down costs and extend distribution to reach a broader client set.
      </Popover.Body>
    </Popover>
  );

  const focus4 = (
    <Popover id="focus4" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Capital Markets</Popover.Header>
      <Popover.Body className="popover-text">
        Innovative solutions and software helping banks, trading firms, and exchanges become more nimble and efficient.
      </Popover.Body>
    </Popover>
  );

  const focus5 = (
    <Popover id="focus5" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Asset Management</Popover.Header>
      <Popover.Body className="popover-text">
        Realigning value chains to reach broader investor audiences with unique investment offerings more profitably and efficiently.
      </Popover.Body>
    </Popover>
  );

  const focus6 = (
    <Popover id="focus6" className="popover-container">
      <Popover.Header as="h3" className="popover-header">DeFi and Blockchain</Popover.Header>
      <Popover.Body className="popover-text">
        Innovative Smart Contract-based technologies that enable buyers, sellers, lenders, and borrowers of financial products to interact directly without the use of intermediaries such as bankers, brokers, or other institutions.
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
            <Image className="focus-img" src={fintech} alt="fintech" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item2">
        <OverlayTrigger trigger="hover" placement="left-start" overlay={focus2}>
          <button className="share_btn focus">
            <Image className="focus-img" src={alternativefinance} alt="specialty finance" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item3">
        <OverlayTrigger trigger="hover" placement="left-start" overlay={focus3}>
          <button className="share_btn focus">
            <Image className="focus-img" src={txnprocess} alt="transaction processing" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item4">
        <OverlayTrigger trigger="hover" placement="top-start" overlay={focus4}>
          <button className="share_btn focus">
            <Image className="focus-img" src={capitalmkts} alt="electronic cap" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item5">
        <OverlayTrigger trigger="hover" placement="right-end" overlay={focus5}>
          <button className="share_btn focus">
            <Image className="focus-img" src={assetmgmt} alt="asset management" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="item6">
        <OverlayTrigger trigger="hover" placement="right-end" overlay={focus6}>
          <button className="share_btn focus">
            <Image className="focus-img" style={{ marginBottom: "2.0rem" }} src={blockchain} alt="business services" />
          </button>
        </OverlayTrigger>
      </div>


    </div>

  )

}

export default IndustryFocusPopover;