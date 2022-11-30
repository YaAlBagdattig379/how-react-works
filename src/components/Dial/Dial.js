import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'3px solid purple' }}>
            <h1>This is dial</h1>
            <p>total mtr are counted : {props.running} mtr</p> {/*data are accepted*/}
        </div>
    );
};

export default Dial;