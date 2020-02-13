import React from 'react';


export const CardInfo = (props) =>
    (
        <div className="cardinfo">
            
        <img className="img" src={props.param['card_images'][0].image_url} />

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
        {props.param.type ? <li><span>Card Type:</span> {props.param.type}</li>:''}
        {props.param.family ? <li><span>Family:</span> {props.param.family}</li>:''}
        {props.param.type ? <li><span>Type:</span> {props.param.type}</li>:''}
        {props.param.desc ? <li><span>Property:</span> {props.param.desc}</li>:''}
        {props.param.level ? <li><span>Level:</span> {props.param.level}</li>:''}
        {props.param.atk ? <li><span>Attack:</span> {props.param.atk}</li>:''}
        {props.param.def ? <li><span>Defence:</span> {props.param.def}</li>:''}
        </div>
        
        </div>

        </div>

            
        </div>
    );




export default CardInfo;
