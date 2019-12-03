import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Element = (props) => {
    return (
        <tr>
            <td><img src={props.img} alt="image" /></td>
            <td>{props.name}</td>
            <td>{props.popularity.toFixed(2)} <button onClick={props.delete}>Delete</button></td>
            <td></td>
        </tr>
    );
}

export default Element;