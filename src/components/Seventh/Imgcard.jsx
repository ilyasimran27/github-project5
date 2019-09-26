import React from 'react';


function Imgcard(props){
    return(
        <div className="container">
        <div className="container-image"> <img src={props.image}></img></div>
        <h3>{props.heading}</h3>
        <p>{props.para}</p>
      </div>
    )
}

export default Imgcard;