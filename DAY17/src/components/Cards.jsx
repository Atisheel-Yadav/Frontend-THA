import React from 'react';


function Cards({title,value}){
    return (
        <div className="Cards">
            <h1>{title}</h1>
            <h2>You have consumed {value} calories today.</h2>
        </div>
    );
}

export default Cards;