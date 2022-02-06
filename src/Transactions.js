import './Transactions.css';
import TransactionCard from './TransactionCard';
import { transactions } from './data/transactions.js';

const Transactions = () => {

  return (

    <section className="txn txn-section">
      <div className="txn-main">
        <div className="txn-header">
          <h2 className="heading-primary-dk">TRANSACTIONS</h2>
        </div>
        {/* ============================================================================ */}
        <div className="txn-card-div">
          <div className="row gx-5 row-cols-auto justify-content-center">
            {/* TRANSACTION CARD START */}

            {transactions.sort((a, b) => (a.Order > b.Order) ? 1 : -1).map(txn =>
              <div key={txn.Order}>
                <TransactionCard

                  txn={txn}
                  name={txn.Name}
                  description={txn.Description}
                  investor={txn.Investor}
                  type={txn.Type}
                  amount={txn.Amount}
                  year={txn.Year}
                />
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Transactions;