import React from 'react';


function Card(props){
    return(
      <div className="card">
        <div className="card_body">
          <a href={props.link}><h2 className = "card_title">{props.title}</h2></a>
          <img src={props.img} class="card_image"/>
          <h3> Rating: {props.rating}/5 | Time: {props.time} min</h3>
        </div>
      </div>
      )
  }

export default Card;