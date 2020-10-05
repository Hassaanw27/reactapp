import React from 'react';
import './Prints.css'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Link } from 'react-router-dom';


export default function Prints({
  name,
  userName,
  size,
  image,
  desc,
  externalurl
}) {
  return (
    <div className="Prints">
      <img src={image}/>
      <h4>{size}<small>MB</small></h4>
      <div className="cardtop">
      <h2>{name} <h3>Uploaded by:<br></br> {userName}</h3></h2>
      </div>

      <div className="cardbottom">
      <p>{desc}</p>

      </div>

      <div className="buttons">



      <button type="button" name="button">share</button>
      <button onClick={(e) => (window.location = {externalurl})}>Click me</button>
      <a className="arlink" href={externalurl}>AR-view</a>

      </div>

    </div>
  );
}
