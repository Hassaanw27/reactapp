import React from 'react';
import './Prints.css'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


export default function Prints({
  name,
  userName,
  size,
  image,
  desc
}) {
  return (
    <div className="Prints">
      <img src={image}/>

      <div className="cardtop">
      <h2>{name}</h2>
      <h3>Uploaded by: {userName}</h3>
      </div>

      <div className="cardbottom">
      <p>{desc}</p>
      <h4>{size}<small>MB</small></h4>
      </div>

      <div className="buttons">
      <button type="button" name="button">share</button>
      <button type="button" name="button">explore</button>
      </div>

    </div>
  );
}
