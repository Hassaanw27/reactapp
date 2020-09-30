import React from 'react'
import "./Results.css"
import VideoCard from "./VideoCard.js"
import data from './data';
import Prints from './Prints';




function Results() {
  return (
    <div className="results">
      <h1>Results</h1>


      {data.filter(name => name.date == 1102020).map(filteredPerson => (
        <Prints
        userName={filteredPerson.userName}
          size={filteredPerson.size}
          key={filteredPerson.name}
          name={filteredPerson.name}
          image={filteredPerson.image}
          desc={filteredPerson.desc}
        />
      ))}

    </div>
  )
}

export default Results
