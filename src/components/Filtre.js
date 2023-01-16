import React from 'react';
import '../Filtre.css';
function Filtre({setEtape, Etape}) { 
    return (
        <div>
            <>
            <div class="Ariane"> 
            {Etape === 4 && <h1 class="Couleurfond">Filtre</h1>}
            {Etape === 4 && 
                <div class="rectangles5">
                    <div class="R4"></div>
                    <div class="R2"></div>
                    <div class="R3"></div>
                    <div class="R1"></div>
                    <div class="R5"></div>
                </div>
                }
            </div>

            </>
        </div>

    );


}


export default Filtre;