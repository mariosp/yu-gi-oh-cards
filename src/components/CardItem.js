import React from 'react';
import {Link} from 'react-router-dom';


const CardItem =  (props) =>(

   <div className="cardbox"> 
    <div className="carditem">
        <h5>{props.name}</h5>
        <div className="ctype">{props.type}</div>
    </div>
    </div>


);

export default CardItem;