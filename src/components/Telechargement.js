import React from 'react';
import '../Telechargement.css';
function Telechargement({setEtape, Etape}) { 
    return (
        <div>
            <>
            <div class="Ariane"> 
            {Etape === 5 && <h1 class="Couleurfond">Téléchargement</h1>}
            {Etape === 5 && 
                <div class="rectangles5">
                    <div class="R5"></div>
                    <div class="R2"></div>
                    <div class="R3"></div>
                    <div class="R4"></div>
                    <div class="R1"></div>
                </div>
                }
            </div>

            </>
        </div>

    );


}


export default Telechargement;