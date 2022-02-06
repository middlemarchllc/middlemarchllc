import './IndustryFocus.css';
import IndustryFocusPopover from './IndustryFocusPopover';

const IndustryFocus = () => {

  return (

    // <section className="ind-focus ind-focus-section">
      // <div className="ind-focus-main">
        /* <div className="ind-focus-header">
          <h2 className="heading-primary-dk">Industry Focus</h2>
        </div> */

        <div className="ind-focus-grid">
          <div className="ind-focus-bubble">
            <IndustryFocusPopover />
          </div>
        </div>
      // </div>
    // </section>
  )
}

export default IndustryFocus;