import React from 'react';
import '../Telechargement.css';
function Telechargement({setEtape, Etape}) { 
    return (
        <div>
            <>
            <div className='Ariane'> 
                {Etape === 5 && <h1 className='Couleurfond'>Téléchargement</h1>}
                {Etape === 5 && 
                    <div className='rectangles5'>
                        <div className='R5'></div>
                        <div className='R2'></div>
                        <div className='R3'></div>
                        <div className='R4'></div>
                        <div className='R1'></div>
                    </div>
                }
            </div>

            </>
        </div>

    );


}


export default Telechargement;