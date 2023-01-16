import React from 'react';
import '../Motifs.css';
function Motifs({setEtape, Etape}) { 
    return (
        <div>
            <>
            <div class="Ariane"> 
            {Etape === 2 && <h1 class="Couleurfond">Motifs</h1>}
            {Etape === 2 && 
                <div class="rectangles5">
                    <div class="R2"></div>
                    <div class="R1"></div>
                    <div class="R3"></div>
                    <div class="R4"></div>
                    <div class="R5"></div>
                </div>
                }
            </div>

            </>
        </div>

    );


}


export default Motifs;