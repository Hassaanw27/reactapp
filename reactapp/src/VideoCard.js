import React from 'react'
import "./VideoCard.css"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


function VideoCard({props}) {
  return (
    <div className="videocard">
    <img src="https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg" alt="a randopm "/>
    <div>
    <h2>New print</h2>
    <div className="cardlayout">
    <p>HEMI</p>
    <PersonOutlineIcon / >
  </div>
    </div>
    <h2 className="desctext">Lorem ipsum dolor sit amet</h2>
    </div>
  )
}


export default VideoCard
