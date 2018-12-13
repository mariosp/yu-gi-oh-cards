import React from 'react';


export const CardInfo = (props) =>
    (
        <div className="cardinfo">
            
        <img className="img" src={"http://52.57.88.137/api/card_image/"+props.param.name} />

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
        {props.param.card_type ? <li>Card Type: {props.param.card_type}</li>:''}
        {props.param.family ? <li>Family: {props.param.family}</li>:''}
        {props.param.type ? <li>Type: {props.param.type}</li>:''}
        {props.param.property ? <li>Property: {props.param.property}</li>:''}
        {props.param.property ? <li>Property: {props.param.property}</li>:''}
        {props.param.level ? <li>Level: {props.param.level}</li>:''}
        {props.param.atk ? <li>Attack: {props.param.atk}</li>:''}
        {props.param.def ? <li>Defence: {props.param.def}</li>:''}
        </div>
        
        </div>

        </div>

            
        </div>
    );




export default CardInfo;