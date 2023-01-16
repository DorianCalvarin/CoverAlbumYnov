import React from 'react';
import '../Filtre.css';
function Filtre({setEtape, Etape}) { 
    return (
        <div>
            <>
            <div className='Ariane'> 
            {Etape === 4 && <h1 className='Couleurfond'>Filtre</h1>}
            {Etape === 4 && 
                <div className='rectangles5'>
                    <div className='R4'></div>
                    <div className='R2'></div>
                    <div className='R3'></div>
                    <div className='R1'></div>
                    <div className='R5'></div>
                </div>
                }
            </div>

            </>
        </div>

    );


}


export default Filtre;