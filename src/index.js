import React from 'react';
import ReactDOM from 'react-dom/client';
// import { AppStudy } from './components/AppStudy';
// import { Reader } from 'components/StudyComponents/Reader/Reader';
import { App } from 'components/App';
import './index.css';
// import publications from './publications.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    {/* <AppStudy /> */}

    {/* <Reader publications={publications} /> */}
  </React.StrictMode>
);
