import React from 'react';

const Sortierung = (props) => {
    return ( 
        <div>
            <input type="button" value="Add Random Contact" onClick={props.random}/>
            <input type="button" value="Sort by name" onClick={props.sortByName}/>
            <input type="button" value="Sort by popularity" onClick={props.sortByPopularity}/>
        </div>
     );
}
 
export default Sortierung;