import React from 'react';
import "./Pricing.css"
import asda from "../price.png"

  function Pricing(){
    return(
      <div>
        <h1>Pricing</h1>
        <h2>This tutoring program is designed to support students aged <p> 11-16 who may be facing challenges in school or are striving to achieve the highest grades possible in their GCSEs.</p></h2>
        <img class = "asda" id="price" src= {asda} alt="The Pulpit Rock" width="304" height="228"></img>
        <h3><ul>
          <li>Cost for 3 months - £350</li>
          <li>Cost for 6 months - £600</li>
          <li>Cost for 1 year - £1500</li>
          </ul></h3>
      </div>

    
    );
  }
  export default Pricing;