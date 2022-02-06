import Modal from 'react-bootstrap/Modal';
import './NewsModal.css';
import { newsarticles } from './data/newsarticles.js';
import articles from './images/news/articles-lt.png';
import events from './images/news/events-lt.png';
import news from './images/news/news-lt.png';
import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

const NewsModal = (props) => {
  const modalImage = props.modalType === 'NEWS' ? news : props.modalType === 'ARTICLES' ? articles : events;
  const [summary, setSummary] = useState('');
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  return (
    <Modal
      scrollable={false}
      {...props}
      aria-labelledby="NewsModal"
    >
      <i className="far fa-times-circle fa-3x news-modal-close" onClick={props.onHide}></i>
      <Modal.Header>
        <Modal.Title>
          <div className="news-container">
            <div style={{ alignSelf: "center" }}><img className="news-modal-image" alt={props.modalType} src={modalImage} /></div>
            <div className="news-modal-header">{props.modalType}</div>
          </div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="news-modal-li">
          <ul className="no-bullets">
            <div ref={ref} className="news-modal-text" style={{ marginTop: "8rem" }}>
              {newsarticles.map(item =>
                item.Type === props.modalType ?
                  <li
                    key={item.Sort}
                    style={{ marginBottom: "4rem" }}
                    onMouseEnter={(event) => { setSummary(item.Summary); setShow(true); setTarget(event.target) }}
                    onMouseLeave={(event) => { setSummary(''); setShow(false); setTarget(null) }}
                  >
                    <div className="news-div" style={{ cursor: "pointer" }} >
                      <a
                        href={item.Link}
                        target="_blank" rel="noreferrer"
                      >
                        {item.Title}
                      </a>
                    </div>
                  </li>
                  :
                  null
              )}
              <Overlay
                show={show}
                target={target}
                placement="top"
                container={ref}
                containerPadding={20}
              >
                <Popover id="news-modal-popover">
                  <Popover.Body className="news-modal-popover-text">
                    {summary}
                  </Popover.Body>
                </Popover>
              </Overlay>
            </div>
          </ul>

        </div>
      </Modal.Body>
    </Modal>
  );
}
export default NewsModal;