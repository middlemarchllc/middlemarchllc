import n101 from '../news/news/MCP Veransa Announcement 2021 12 16.pdf';
import n103 from '../news/news/Elevate PR - Elevate Secures 25M Investment from Kayne Partners - 2019-06-17.pdf';
import n104 from '../news/news/Creamfinance FINRA Approved MM Advises Creamfinance on 21 million Equity Raise.pdf';
import n105 from '../news/news/MM CPC Press Release 2018 06 14_Final.pdf';
import n106 from '../news/news/Mutuo Press Release -2021 12 19.pdf';
import n107 from '../news/news/FPAY Press Release Final 2016 06 29 .pdf';
import n108 from '../news/news/FPAY-MM  PR Announcement 2015 03 17_Final.pdf';
import n109 from '../news/news/MM Privlo Announcement Final 2014 08 12.pdf';
import n110 from '../news/news/MM PR Announcement Final 2013 02 12.pdf';
import n111 from '../news/news/CapFusion-MM  PR Announcement 2016 05 31.pdf';
import a201 from '../news/articles/Sustainability MMP Article 2022 01 20b.pdf';
import a203 from '../news/articles/Middlemarch Capital seeks co-investment partners for fintech deals _ Debtwire.pdf';
import a204 from '../news/articles/US Investors Seek International  Fintechs.pdf';
import a205 from '../news/articles/Evaluating and Managing Cyber Risk for Investors MM.pdf';
import a206 from '../news/articles/TheAlternativeLendingReport_Middlemarch.pdf';
import a208 from '../news/articles/Securing Growth Capital for Alternative Finance Companies in the COVID-19 Era.pdf';
import a209 from '../news/articles/AM-opinion-Tech-Lend-080919 sg.pdf';

var newsarticles = [
  {
    'Type': 'NEWS',
    'Sort': 1.01,
    'Title': 'Veransa Raises $30M of Equity',
    'Link': n101,
    'Summary': 'Veransa raises $30M of equity from RFE Investment Partners and Middlemarch Capital Partners to acquire CRR and FOS.'
  },
  {
    'Type': 'NEWS',
    'Sort': 1.02,
    'Title': 'Sunseeker Raises $350M of Debt',
    'Link': 'https://www.prnewswire.com/news-releases/castlelake-provides-loan-to-allegiant-backed-sunseeker-resort-301400473.html',
    'Summary': 'Sunseeker, a division of Alligent Travel Company (NASDAQ: ALGT), has raised $130M of debt to support the development of Sunseeker Resort Charlotte Harbor in Florida.'
  },
  {
    'Type': 'NEWS',
    'Sort': 1.03,
    'Title': 'Elevate Secures $25M of Equity',
    'Link': n103,
    'Summary': 'Elevate Services secures $25M equity commitment from Kayne Anderson Partners to fuel growth in legal services for corporations and law firms.'
  },
  {
    'Type': 'NEWS',
    'Sort': 1.04,
    'Title': 'Creamfinace Raises €21M Euros',
    'Link': n104,
    'Summary': 'Creamfinance raised €21M Euros from Capitec Bank of South Africa to support the expansion of Cream\'s consumer lending programs in Europe and South America.'
},
  {
    'Type': 'NEWS',
    'Sort': 1.05,
    'Title': 'Channel Ptrs. Raises $45M of Equity',
    'Link': n105,
    'Summary': 'Channel Partners Capital raised $45M of equty from Elliott Capital Management to support the expansion of its SME lending programs.'
  },
  {
    'Type': 'NEWS',
    'Sort': 1.06,
    'Title': 'Mutuo Raises $100M Debt Facility',
    'Link': n106,
    'Summary': 'Mutuo Financiero secures $100M debt commitment from Crayhill Capital to support expansion of its Mexico-based auto lease finance business.'
  },
  {
    'Type': 'NEWS',
    'Sort': 1.07,
    'Title': 'Flexshopper Raises $23M of Equity ',
    'Link': n107,
    'Summary': 'Flexshopper raises $23M of equity from PIMCO and Middlemarch Capital Partners to support the expansion of its consumer leasing programs with consumers and retailers.'
  },
  {
    'Type': 'NEWS',
    'Sort': 1.08,
    'Title': 'Flexshopper Raises $110M of Debt and Equity',
    'Link': n108,
    'Summary': 'Flexshopper raises $100M of debt and $10M of equity from Waterfall Asset Management and other investors including Middlemarch Partners to support the growth of its consumer lease financing business.'
  },
  {
    'Type': 'NEWS',
    'Sort': 1.09,
    'Title': 'Privlo Raises $350 Debt Facility',
    'Link': n109,
    'Summary': 'Privlo received a $350M commitment from Waterfall Asset Managment to finance the development of its non-QM mortgage lending business.'
  },
  {
    'Type': 'NEWS',
    'Sort': 1.1,
    'Title': 'Middlemarch Announces Merchant Banking Effort',
    'Link': n110,
    'Summary': 'Middlemarch Parnters launches Middlemarch Capital Partners, the investment arm of the firm, to pursue co-investments and lead investments in high-growth businesses.'
  },
  {
    'Type': 'NEWS',
    'Sort': 1.11,
    'Title': 'Capfusion Raises $60M of Debt',
    'Link': n111,
    'Summary': 'Capfusion raised $60M of debt from Main Street Financial to support the expansion of its SME lending program.'
  },
  {
    'Type': 'ARTICLES',
    'Sort': 2.01,
    'Title': 'How Waste Became A Case For ESG Investing',
    'Link': a201,
    'Summary': 'How Middlemarch advised and invested in Veransa, a yard waste recycling company that produces organic compost as a substitute for chemical fertilizer.'
  },
  {
    'Type': 'ARTICLES',
    'Sort': 2.03,
    'Title': 'Middlemarch Seeks Co-Investors',
    'Link': a203,
    'Summary': 'Middlemarch Capital Partners seeks LP investors to participate in the firm\'s co-investment funds alongside lead sponsors'
},
{
  'Type': 'ARTICLES',
    'Sort': 2.04,
      'Title': 'US Investors Seek International Fintechs',
        'Link': a204,
          'Summary': 'International fintechs that prepare themselves properly for capital raises can secure equity and debt from valued-added US investors '
},
{
  'Type': 'ARTICLES',
    'Sort': 2.05,
      'Title': 'Evaluating and Managing Cyber Risk ',
        'Link': a205,
          'Summary': 'Middlemarch Partner Sasha Grutman was intereviewed on the risks of cyber security in financial services'
},
{
  'Type': 'ARTICLES',
    'Sort': 2.06,
      'Title': 'Customer Acqusition in Fin. Services',
        'Link': a206,
          'Summary': 'Middlemarch describes the best practices and challenges associated with managing customer acquisition expenses in financial services.'
},
{
  'Type': 'ARTICLES',
    'Sort': 2.07,
      'Title': 'Identifying LBO Candidates (Video)',
        'Link': 'https://www.youtube.com/watch?v=ESsLk1vPGHM&list=PLc_3xizSvjgG56y3I4NQvXSnmFf3uczeu&index=2',
          'Summary': 'Private Equity Profits Podcast interview of Sasha Grutman about his views on what makes for an attractive LBO candidate.'
},
{
  'Type': 'ARTICLES',
    'Sort': 2.08,
      'Title': 'Securing Capital in the Covid-19 Era',
        'Link': a208,
          'Summary': 'Middlemarch identifies key success factors in capital raises for financial services companies seeking capital during the COVID-19 time period.'
},
{
  'Type': 'ARTICLES',
    'Sort': 2.09,
      'Title': 'Market Reception of Public Fintechs',
        'Link': a209,
          'Summary': 'IPOs of fintechs such as Greensky and OnDeck Capital have had negative impacts on how alternative finance companies are perceived by institutional investors.'
},
{
  'Type': 'EVENTS',
    'Sort': 3.01,
      'Title': 'Opal Marketplace Lending Conference (Dec. 7-9, 2022)',
        'Link': 'https://opalgroup.net/conference/marketplace-lending-alternative-financing-summit-2022/',
          'Summary': 'Middlemarch will be participating as a speaker and look forward to engaging with companies attending the conference.'
},
{
  'Type': 'EVENTS',
    'Sort': 3.02,
      'Title': 'Money 2020 Conference (Oct. 23-36, 2022)',
        'Link': 'https://us.money2020.com',
          'Summary': 'Middlemarch will be attending Money 2020 and will be meeting with clients, investors, and companies seeking growth capital.'
},
{
  'Type': 'EVENTS',
    'Sort': 3.03,
      'Title': '2022 LendIt (May 25-26, 2022)',
        'Link': 'https://www.lendit.com/usa/2022',
          'Summary': 'Middlemarch is attending LendIt and will be meeting with prospective clients and investors in New York.'
},
{
  'Type': 'EVENTS',
    'Sort': 3.04,
      'Title': 'Fintech MeetUp 2022',
        'Link': 'https://www.fintechmeetup.com/?gclid=CjwKCAiAzrWOBhBjEiwAq85QZ_4BKM3WDIkGU86KGt3ANOCD0qfNhSbR4q8ZzcxvG_5ZE-90FLG_PBoCr70QAvD_BwE',
          'Summary': 'Middlemarch is attending virtually this year\'s Fintech MeetUp where we look forward to connecting with companies seeking capital and support with M & A.'
},
{
  'Type': 'EVENTS',
    'Sort': 3.05,
      'Title': 'ABS East (Dec 13-14, 2021)',
        'Link': 'https://www.imn.org/structured-finance/conference/ABS-East-2021/',
          'Summary': 'Middlemarch is attending ABS East and meeting with prospective clients and investors in Miami.'
},
{
  'Type': 'EVENTS',
    'Sort': 3.06,
      'Title': 'Opal Lending Conf. (Dec 8-10, 2021)',
        'Link': 'https://opalgroup.net/conference/marketplace-lending-alternative-financing-summit-2021/',
          'Summary': 'Middlemarch is participating on the venture capital panel as well as hosting a fireside chat about customer acquisition costs at the Makretplace Lending Conference.'
},
];

export { newsarticles };