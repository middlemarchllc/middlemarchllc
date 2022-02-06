import Button from 'react-bootstrap/Button';
import './Hamburger.css';

const Hamburger = (props) => {

  return (

    <>
      <Button variant="flat" size="xxl" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span className="navbar-toggler-icon" style={{ width: "100%" }}></span></Button>
      <div className="offcanvas offcanvas-end offcanvas-width" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          GO TO ...
          <i className="far fa-times-circle" data-bs-dismiss="offcanvas"></i>
          {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
        </div>
        <div className="offcanvas-body">
          <div id="offcanvasRightLabel" className="offcanvas-right-label" onClick={() => props.onClickLanding()}>HOME</div>
          {/* <div id="offcanvasRightLabel" className="offcanvas-right-label">OUR FIRM</div> */}
          <div id="offcanvasRightLabel" className="offcanvas-right-label" onClick={() => props.onClickOurFirm()}>OUR FIRM</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label-inner" onClick={() => props.onClickMerchBank()}>Merchant Banking</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label-inner" onClick={() => props.onClickPrivCap()}>Private Capital</div>
          {/* <Nav.Link href="#" onClick={() => onClickOurTeam()}>OUR TEAM</Nav.Link> */}
          <div id="offcanvasRightLabel" className="offcanvas-right-label" onClick={() => props.onClickOurTeam()}>OUR TEAM</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label" onClick={() => props.onClickTransactions()}>TRANSACTIONS</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label" onClick={() => props.onClickNews()}>NEWS, ARTICLES, EVENTS</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label" onClick={() => props.onClickOurInvestors()}>OUR INVESTORS</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label" onClick={() => props.onClickContact()}>CONTACT US</div>
        </div>
      </div>
    </>
  );
}

export default Hamburger;