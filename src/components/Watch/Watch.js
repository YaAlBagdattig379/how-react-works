import React, { useState } from 'react';

const Watch = () => {
//   stats declare
const [mtr,setMtr] = useState(0);
// annonymous arrow function 
const running = () =>{
    const newMtr = mtr + 1;
    setMtr(newMtr)
}
    return (
        <div style={{border:'5px solid green',margin:'10px',padding:'10px'}}>
            <h1>this is her Smart Watch</h1>
            <h3>running : {mtr}</h3>
            <button onClick={running}>de dour......</button>
        </div>
    );
};
export default Watch;