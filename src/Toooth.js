import React from "react";



export default function Toshies(props) {
    return(
        <div className="team">
          <div className="team-id">
            <img className="id" src={props.img} alt="" />
            <p>
              <img className="twt" src={props.logo} alt=""/>
              <a className="a-tag" href="">{props.at}</a>
            </p>
          </div>
        </div>
    )
  }