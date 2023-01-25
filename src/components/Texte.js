import React from 'react';
import '../Texte.css';
function Texte({setEtape, Etape, setTextes, Textes, setTop, Top, setLeft, Left, setCouleurfont, Couleurfont, setSize, Size }) { 
    
    return (
        <div>

            <>
            <div className='Ariane'> 
                {Etape === 3 && <h1 className='Couleurfond'>Texte</h1>}
                {Etape === 3 && 
                    <div className='rectangles5'>
                        <div className='R3'></div>
                        <div className='R2'></div>
                        <div className='R1'></div>
                        <div className='R4'></div>
                        <div className='R5'></div>
                    </div>
                }
            </div>

            <div className="Wrapper">
                <div className="AlbumContainer">
                    <div className='AlbumText'></div>
                    <div className="AlbumEtape">
                        <p style={{top: Top,left: Left, position: 'absolute', margin: '0', color: Couleurfont, fontSize: Size, fontFamily: 'impact'}}>{Textes}</p>
                    </div>
                </div>
            </div>

            <form className='Text'>
                {Etape === 3 &&
                <p className='Positiontop'>Position du texte</p>}
                    {Etape === 3 &&
                <p className='Tailletexte'>Taille du texte</p>}
                    
                    
                {Etape === 3 &&
                     <input type="range" id="select-text2" onChange={(event)=>setTop(event.target.value+'%')}/>}
                {Etape === 3 &&     
                     <input type="range" id="select-text1" onChange={(event)=>setLeft(event.target.value+'%')}/>}
                <div className='AddText'>
                    {Etape === 3 &&
                        <p className='TitreAlbum'>Ajouter du texte</p>}
                    <div className='AddTextBtn'>
                        {Etape === 3 &&
                            <input type="text" id="select-text" placeholder='Titre exemple...' onChange={(event)=>setTextes(event.target.value)}/>}
                        {Etape === 3 &&     
                            <input type="color" id="select-text3" onChange={(event)=>setCouleurfont(event.target.value)}/>}
                    </div>
                </div>

                {Etape === 3 &&     
                    <input type="range" id="select-text4" onChange={(event)=>setSize(event.target.value+'pt')}/>}
            </form>
            </>
        </div>

    );


}


export default Texte;