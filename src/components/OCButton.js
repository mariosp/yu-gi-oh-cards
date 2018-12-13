import React from 'react';



const OCButton = ()=>(
   

    <div  id="ocbutton" className="container" onClick={()=> {
        document.getElementById('ocbutton').classList.toggle('change');
        }
    }>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
    </div>
    

);

export default OCButton;