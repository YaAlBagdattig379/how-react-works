import React, {useState} from 'react';
import Display from '../Display/Display';

const Watch = () => {
//   stats declare
const [mtr,setMtr] = useState(0);
// annonymous arrow function 
const running = () =>{ //for go ahead 
    const newMtr = mtr + 1;
    setMtr(newMtr)
}
// const running2 = () =>{ //for go back 
//     if(mtr > 0){
//         const newMtr = mtr - 1;
//         setMtr(newMtr)
//     }
    
// }
    return (
        <div style={{backgroundColor:'olivedrab',border:'5px solid green',margin:'10px',padding:'10px'}}>
            <h1>This is her Smart Watch</h1>
            <h3>Running : <span style={{color:'yellow'}}>{mtr}</span></h3>

            <button onClick={running} style={{borderRadius:'7px',borderStyle:'none',backgroundColor:'blue',color:'white'}}>de dour.....</button>
            <Display time='11am' mtr={mtr} ></Display>{/*data are to send into display component*/}
{/*         
            <button onClick={running2} style={{borderRadius:'7px',marginTop:'10px',borderStyle:'none',backgroundColor:'blue',color:'white'}}>pichone dour.....</button>
            <Display time='11am' mtr={mtr} ></Display>data are to send into display component */}
        
        </div>
    );
};
export default Watch;