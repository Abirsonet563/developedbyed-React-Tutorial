import React from "react";

function Hello(){
    const sayhello = () => {
        console.log('Hello');
    };

    return(
        <div>
            <button style={{cursor:'pointer'}} onClick={sayhello}>Click Me</button>
        </div>
    );
}

export default Hello;