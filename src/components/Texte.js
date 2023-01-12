import React from 'react';
import '../Texte.css';
function Texte(setEtape, Etape) { 
    return (
        <div>
            {Etape === 3 && <h1>HELLO</h1>}
        </div>

    );


}


export default Texte;