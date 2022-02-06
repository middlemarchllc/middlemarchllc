import './News.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import articles from './images/news/articles-lt.png';
import events from './images/news/events-lt.png';
import news from './images/news/news-lt.png';
import { newsarticles } from './data/newsarticles.js';
import React, { useState, useRef } from 'react';
import NewsModal from './NewsModal';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';


const News = () => {

  const [modalShow, setModalShow] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [summary, setSummary] = useState('');
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);


  return (
    <section className="news news-section">
      <div className="news-main">
        <div className="news-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>NEWS, ARTICLES &amp; EVENTS</h2>
        </div>
        {/* ============================================================================ */}
        <div className="news-content">
          <Container fluid style={{ margin: "5rem 3rem 3rem 0rem" }}>
            <Row md={1} lg={3}>
              {['NEWS', 'ARTICLES', 'EVENTS'].map((newsType,index) => (
                <Col key={index}>
                  <Card
                    border="none"
                    style={newsType === 'NEWS' ? { marginLeft: "2rem" } : newsType === 'EVENTS' ? { marginRight: "2rem" } : null}

                  >
                    <Card.Body>
                      <Card.Img className="news-img" variant="top" src={newsType === 'NEWS' ? news : newsType === 'ARTICLES' ? articles : events} />
                      <Card.Title>
                        <h2 className="heading-secondary-dk">{newsType === 'NEWS' ? 'News' : newsType === 'ARTICLES' ? 'Articles' : 'Events'}</h2>
                      </Card.Title>
                      <Card.Text>
                        <div className="news-li">
                          <ul className="no-bullets">
                            <div ref={ref}>
                            {newsarticles.map(item =>
                              item.Type === newsType && item.Sort < (newsType === 'NEWS' ? 1.07 : newsType === 'ARTICLES' ? 2.07 : 3.07) ?
                                <li
                                key={item.Sort}
                                style={{ marginBottom: "2rem" }}
                                onMouseEnter={(event) => { setSummary(item.Summary); setShow(true); setTarget(event.target) }}
                                onMouseLeave={(event) => { setSummary(''); setShow(false); setTarget(null) }}>
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
                          <button className="read-more-link" style={{ fontSize: "2rem" }} onClick={() => { setModalShow(true); setModalType(newsType); }}>
                            Read More ...
                          </button>
                          <NewsModal show={modalShow} onHide={() => setModalShow(false)} dialogClassName="modal-90w" modalType={modalType} />
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

              ))}


            </Row>
          </Container>
        </div>
      </div>
    </section>

  )
}

export default News;