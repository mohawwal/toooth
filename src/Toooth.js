import React from "react";



export default function Toshies(props) {
    return(
        <div className="team">
          <div className="team-id">
            <img className="id" src={props.img} alt="" />
            <p>
              <img className="twt" src={props.logo} alt=""/>
              <i className="a-tag" >{props.at}</i>
            </p>
          </div>
        </div>
    )
  }