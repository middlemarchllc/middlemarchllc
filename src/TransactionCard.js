import Image from 'react-bootstrap/Image';

const TransactionCard = (props) => {
  // console.log(props.txn.Logo)
  return (
    <div className="col">
      <div className="image-flip" >
        {/* <div className="image-flip" onTouchStart="this.classList.toggle('hover');"> */}
        <div className="mainflip">

          {/* CARD FRONT START */}
          <div className="frontside">
            <div className="card txn-card">
              <div className="txn-card-content">
                <div className="card-body text-center">
                  {/* <div className="txn-division"><h3>{props.division}</h3></div> */}
                  {props.txn.Logo === 'nologo' ?
                  //  {props.image === '/static/media/logo.efdedb94.jpeg' ?
                    // <div className="txn-nologo">
                      <div>
                        <div className="txn-nologo">
                      {props.name}
                      </div>
                      <div className="test1">
                      <h4 className="card-title">Amount Raised</h4>
                      <h4 className="txn-amount">{props.name === "Cream Finance" ? '€ ' : '$ '} {props.amount}</h4>
                      </div>
                    </div>
                    :
                    // <div className="txn-logo">
                      <div>
                      {/* <img className="img-fluid" src={props.image} alt={props.image} /> */}
                      <div className="txn-logo">
                      <Image src={props.txn.Logo} alt={props.name} />
                      </div>
                      <div className="test1">
                      <h4 className="card-title">Amount Raised</h4>
                        <h4 className="txn-amount">{props.name === "Cream Finance" ? '€ ' : '$ '} {props.amount}</h4>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>

          {/* CARD FRONT END / CARD BACK START */}
          <div className="backside">
            <div className="card txn-card">
              <div className="txn-card-content">
                <div className="card-body text-center mt-4">
                  {/* <div className="txn-nologo">
                  {props.industry}
                  {props.type}
                  $ {props.amount}
                  {props.date}
                </div> */}
                  <div className="card-back">
                    <div className="back-title">Type</div>
                    <div className="back-text">{props.type}</div>

                    {props.year !== '' ?
                      <div>
                        <div className="back-title">Year</div>
                        <div className="back-text">{props.year}</div>
                      </div>
                      :
                      null
                    }

                    <div className="back-title">Description</div>
                    <div className="back-text">{props.description}</div>
                    <div className="back-title">Investor</div>
                    <div className="back-text">{props.investor}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CARD BACK END */}

        </div>
      </div>
    </div>
  )
}

export default TransactionCard;