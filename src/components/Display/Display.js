import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div>
            <h3>hello good morning at : {props.time}</h3>
            <h3>i am away from : {props.mtr}mtr</h3>
            <Dial running ={props.mtr}></Dial>{/* 'running with Props.mtr' are to send into dial component
            */}
            
        </div>
    );
};

export default Display;