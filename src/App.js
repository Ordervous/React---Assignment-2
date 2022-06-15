import React from 'react';
import companies from './Experience';
import './Experience.css';

function App() {
  let companyList = companies.map((company) => {
    return (
      <div className='experience'>
        <h2>{company.companyName}, {company.jobTitle}</h2>
        <p>{company.description}</p>
      </div>
    )
  })

  return (
    <div className='App'>
      <h1>My Work Experience</h1>
      {companies.length
        ? <div>
          {companyList}
        </div> : <h2>I have just completed High School</h2>
      }
    </div>
  )
};

export default App;


