import React from "react";

export default function Meme(props) {
    return(
            <div>
                <div>
                <img className="mem" src={props.pixs} alt="" />
                </div>
            </div>
    )
}