import React from 'react';
import '../Motifs.css';
function Motifs({setEtape, Etape}) { 
    return (
        <div>
            {Etape === 2 && <h1>HELLO</h1>}
        </div>

    );


}


export default Motifs;