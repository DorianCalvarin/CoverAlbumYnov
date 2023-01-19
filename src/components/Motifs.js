import React from 'react';
import '../Motifs.css';
//import './Random';

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
                    {/*
                    <div class="container">
                        <div id="art">
                            <svg id="clickAbleSVG" width="500" height="500" >
                                <path id="jsSVGpath" stroke="#000" fill="green" />
                            </svg>
                        </div>
                        <div class="buttons">
                            <button onclick="randomColor()">New Random Colors</button>
                            <button onclick="generateArt()">New Random Pattern</button>
                        </div>
                    </div>
                    */}

                </div>
            </>
            
        </div>
    );
}


export default Motifs;