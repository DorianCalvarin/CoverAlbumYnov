import React from 'react';
import '../Texte.css';
function Texte(setEtape, Etape) { 
    return (
        <div>
            {Etape === 3 && <h1>HELLO</h1>}

            <>
            <div class="Ariane"> 
                <h1 class="Couleurfond">Texte</h1>
                <div class="rectangles5">
                    <div class="R3"></div>
                    <div class="R2"></div>
                    <div class="R1"></div>
                    <div class="R4"></div>
                    <div class="R5"></div>
                </div>
            </div>
            </>
        </div>

    );


}


export default Texte;