import React from "react";
import seventh1 from '../../images/seventh1.jpg'
import seventh2 from '../../images/seventh2.jpg'
import seventh3 from '../../images/seventh3.jpg'
import seventh4 from '../../images/seventh4.jpg'
import Imgcard from './Imgcard.jsx'
import './style.css'
function Enterprise(){
    return(
        <section className="seventh">
        <p className="para">See how the world's leading companies use GitHub Enterprise.</p>
        <div className="seventh-content">
          <Imgcard image={seventh1} heading={"hello world"} para={"hello imran"}></Imgcard>
          <Imgcard image={seventh2} heading={"big world"} para={"hello imran"}></Imgcard>
          <Imgcard image={seventh3} heading={"hello world"} para={"hello imran"}></Imgcard>
          <Imgcard image={seventh4} heading={"hello world"} para={"hello imran"}></Imgcard>
          
        </div>
      </section>
    )
}
export default Enterprise;