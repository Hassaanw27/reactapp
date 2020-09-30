import React from 'react'
import "./Results.css"
import VideoCard from "./VideoCard.js"
import data from './data';
import Prints from './Prints';




function Results() {
  return (
    <div className="results">
      <h1>Results</h1>


      {data.filter(name => name.date == 1102020).map(prints => (
        <Prints
        userName={prints.userName}
          size={prints.size}
          key={prints.name}
          name={prints.name}
          image={prints.image}
          desc={prints.desc}
        />
      ))}

    </div>
  )
}

export default Results
