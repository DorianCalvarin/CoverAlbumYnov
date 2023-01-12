import React from 'react';
import '../Motifs.css';
function Motifs({setEtape, Etape}) { 
    return (
        <div>
            {Etape === 2 && 
            
            
            <>
            <div class="Ariane"> 
                <h1 class="Couleurfond">Motifs</h1>
                <div class="5rectangles">
                    <div class="R1"></div>
                    <div class="R2"></div>
                    <div class="R3"></div>
                    <div class="R4"></div>
                    <div class="R5"></div>
                </div>
            </div>
            </>
            
            }
        </div>

    );


}


export default Motifs;