import React, { useState } from 'react'
import Loader from "react-js-loader";

const Loaderjs = () => {

    const [color, setColor] = useState('black');
 
    return (
        <div className={"App"}>
            <div className={"content"}>
                <div className={"zoom-out"}>
                {/* <ColorBar setColor={color => setColor(color)} /> */}
               
              
                <div className={"row"}>
                    <div className={"item"}>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    );
}

export default Loaderjs
