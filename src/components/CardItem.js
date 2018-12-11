import React from 'react';
import {Link} from 'react-router-dom';


const CardItem =  (props) =>(

    
    <div>
        <h4>{props.name}</h4>
        <p>{props.type}</p>
    </div>


);

export default CardItem;