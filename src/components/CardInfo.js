import React from 'react';


export const CardInfo = (props) =>
    (
        <div className="cardinfo">
            
        <img className="img flex1" src={"http://52.57.88.137/api/card_image/"+props.param.name} />

        <div className="infobox">
        <div className="desc">
        <h3>Description</h3>
        <div className="text">
        {props.param.text}
        </div>
        </div>

        <div className="details">
        <h3>Details</h3>
        <div className="text">
        {props.param.card_type ? <li><span>Card Type:</span> {props.param.card_type}</li>:''}
        {props.param.family ? <li><span>Family:</span> {props.param.family}</li>:''}
        {props.param.type ? <li><span>Type:</span> {props.param.type}</li>:''}
        {props.param.property ? <li><span>Property:</span> {props.param.property}</li>:''}
        {props.param.level ? <li><span>Level:</span> {props.param.level}</li>:''}
        {props.param.atk ? <li><span>Attack:</span> {props.param.atk}</li>:''}
        {props.param.def ? <li><span>Defence:</span> {props.param.def}</li>:''}
        </div>
        
        </div>

        </div>

            
        </div>
    );




export default CardInfo;