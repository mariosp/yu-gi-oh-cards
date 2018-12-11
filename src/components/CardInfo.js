import React from 'react';
import Title from './Title';

export const CardInfo = (props) =>
    (
        <div>
            <div>
                <Title name={props.param.name} />
                <img src={"http://52.57.88.137/api/card_image/"+props.param.name} /> 
            </div>
        </div>
    );




export default CardInfo;