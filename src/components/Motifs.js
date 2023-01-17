import React from 'react';
import '../Motifs.css';
function Motifs({setEtape, Etape}) { 
    return (
        <div>
            <>
                <div className='Ariane'> 
                    {Etape === 2 && <h1 className='Couleurfond'>Motifs</h1>}
                    {Etape === 2 && 
                        <div className='rectangles5'>
                            <div className='R2'></div>
                            <div className='R1'></div>
                            <div className='R3'></div>
                            <div className='R4'></div>
                            <div className='R5'></div>
                        </div>
                    }
                </div>
            </>
            
        </div>
    );
}


export default Motifs;