import React, { useState } from 'react';
import 'bulma/css/bulma.css';

function LanguageSelector(props) {

    const {languages, languageChange} = props;
        return (
            <section className="hero is-info">
  <div className="hero-body">
    <div className="container">
      <div className="columns">
        <div className="column">
        <h1 className="title">
        Go Corona!
      </h1>
      <h2 className="subtitle">
        Corona go!!
      </h2>
        </div>
        <div>
        <div className="select is-rounded is-pulled-right">
                  

  <select onChange={languageChange} >
            {languages.map((lang, i)=>{
    
            return (<option key={i} value={lang}>{lang}</option>)
            })}
  </select>
</div>
        </div>
      </div>
          
      

    </div>
  </div>
</section>
        );
    }
    
export default LanguageSelector;
    