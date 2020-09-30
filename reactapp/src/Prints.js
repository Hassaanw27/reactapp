import React from 'react';
import './Prints.css'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


export default function Prints({
  name,
  userName,
  size
}) {
  return (
    <div className="Prints">
      <img src="https://image.shutterstock.com/z/stock-vector-sample-stamp-grunge-texture-vector-illustration-1389188327.jpg"/>
      <div className="cardtop">
      
      <h2>{name}</h2>
      <h3>{userName}<PersonOutlineIcon / ></h3>
      </div>
      <h4>{size}<small>MB</small></h4>
    </div>
  );
}
