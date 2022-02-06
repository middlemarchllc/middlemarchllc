import React, { useState, useRef, useEffect } from 'react';
import Hamburger from './Hamburger';
import Landing from './Landing';
import OurFirm from './OurFirm';
import IndFocMerchantBank from './IndFocMerchantBank';
import PrivateCapital from './PrivateCapital';
import OurTeam from './OurTeam';
import OurInvestors from './OurInvestors';
import Transactions from './Transactions';
import News from './News';
import ContactUs from './ContactUs';



function App() {
  const [gotoLanding, setGotoLanding] = useState(false);
  const landingRef = useRef(null);
  const [gotoOurFirm, setGotoOurFirm] = useState(false);
  const ourFirmRef = useRef(null);
  const [gotoMerchBank, setGotoMerchBank] = useState(false);
  const merchBankRef = useRef(null);
  const [gotoPrivCap, setGotoPrivCap] = useState(false);
  const privCapRef = useRef(null);
  const [gotoOurTeam, setGotoOurTeam] = useState(false);
  const ourTeamRef = useRef(null);
  const [gotoTransactions, setGotoTransactions] = useState(false);
  const transactionsRef = useRef(null);
  const [gotoNews, setGotoNews] = useState(false);
  const newsRef = useRef(null);
  const [gotoOurInvestors, setGotoOurInvestors] = useState(false);
  const ourInvestorsRef = useRef(null);
  const [gotoContact, setGotoContact] = useState(false);
  const contactRef = useRef(null);



  useEffect(() => {
    if (gotoLanding && landingRef.current) {
      landingRef.current.scrollIntoView();
      setGotoLanding(false);
    }
    if (gotoOurFirm && ourFirmRef.current) {
      ourFirmRef.current.scrollIntoView();
      setGotoOurFirm(false);
    }
    if (gotoMerchBank && merchBankRef.current) {
      merchBankRef.current.scrollIntoView();
      setGotoMerchBank(false);
    }
    if (gotoPrivCap && privCapRef.current) {
      privCapRef.current.scrollIntoView();
      setGotoPrivCap(false);
    }
    if (gotoOurTeam && ourTeamRef.current) {
      ourTeamRef.current.scrollIntoView();
      setGotoOurTeam(false);
    }
    if (gotoTransactions && transactionsRef.current) {
      transactionsRef.current.scrollIntoView();
      setGotoTransactions(false);
    }
    if (gotoNews && newsRef.current) {
      newsRef.current.scrollIntoView();
      setGotoNews(false);
    }
    if (gotoOurInvestors && ourInvestorsRef.current) {
      ourInvestorsRef.current.scrollIntoView();
      setGotoOurInvestors(false);
    }
    if (gotoContact && contactRef.current) {
      contactRef.current.scrollIntoView();
      setGotoContact(false);
    }

  }, [gotoLanding, gotoOurFirm, gotoMerchBank, gotoPrivCap, gotoOurTeam, gotoTransactions, gotoNews, gotoOurInvestors, gotoContact]);

  return (
    <div>
      <Hamburger
      onClickLanding={() => setGotoLanding(true)}
      onClickOurFirm={() => setGotoOurFirm(true)}
      onClickMerchBank={() => setGotoMerchBank(true)}
      onClickPrivCap={() => setGotoPrivCap(true)}
      onClickOurTeam={() => setGotoOurTeam(true)}
      onClickOurInvestors={() => setGotoOurInvestors(true)}
      onClickTransactions={() => setGotoTransactions(true)}
      onClickNews={() => setGotoNews(true)}
      onClickContact={() => setGotoContact(true)}

      />
      <div ref={landingRef}><Landing /></div>
      <div ref={ourFirmRef}>
        <OurFirm onClickMerchBank={() => setGotoMerchBank(true)} onClickPrivCap={() => setGotoPrivCap(true)} />
      </div>
      <div ref={merchBankRef}><IndFocMerchantBank onClickOurFirm={() => setGotoOurFirm(true)}/></div>
      <div ref={privCapRef}><PrivateCapital onClickOurFirm={() => setGotoOurFirm(true)}/></div>
      <div ref={ourTeamRef}><OurTeam /></div>
      <div ref={transactionsRef}><Transactions /></div>
      <div ref={newsRef}><News /></div>
      <div ref={ourInvestorsRef}><OurInvestors /></div>
      <div ref={contactRef}><ContactUs /></div>
    </div>
  )
}


export default App;