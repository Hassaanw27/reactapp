
import "./Results.css"
import VideoCard from "./VideoCard.js"
import data from './data';
import Prints from './Prints';
import React, { useState, useEffect } from 'react';
import './App.css';
import {prints} from './data';


function Results() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('savings'); //default sortering

  useEffect(() => {
    const sortArray = type => {
      const types = {
        date: 'date',
        views: 'views',
        savings: 'savings',
        printings: 'printings',
      };
      const sortProperty = types[type];
      const sorted = [...prints].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (


<div>
    <div className="nav">
    <h2 onClick={(e) => setSortType('views')}>Popular</h2>
    <h2 onClick={(e) => setSortType('date')}>New</h2>
    <h2 onClick={(e) => setSortType('savings')}>Top Saved</h2>
    <h2 onClick={(e) => setSortType('printings')}>Top Printed</h2>
    </div>


    <div className="results">
         <h1>Results</h1>

         {data.map(print => (
           <Prints
           userName={print.userName}
             size={print.size}
             key={print.name}
             name={print.name}
             image={print.image}
             desc={print.desc}

           />
         ))}

       </div>
       </div>
  );
}

export default Results;
