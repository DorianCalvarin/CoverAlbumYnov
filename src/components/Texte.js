import React from 'react';
import '../Texte.css';
function Texte({setEtape, Etape, setTextes, Textes, setTop, Top, setLeft, Left, setCouleurfont, Couleurfont, setSize, Size }) { 
    
    return (
        <div>

            <>
            <div className='Ariane'> {/*Menu*/}
                {Etape === 3 && <h1 className='Couleurfond'>Text</h1>}
                {Etape === 3 && 
                    <div className='rectangles4'>
                        <div className='R3'></div>
                        <div className='R2'></div>
                        <div className='R1'></div>
                        <div className='R5'></div>
                    </div>
                }
            </div>

            <div className="Wrapper">{/*bloc contenant la cover*/}
                <div className="AlbumContainer">
                    <div className='AlbumText'></div>
                    <div className="AlbumEtape">
                        <p style={{top: Top,left: Left, position: 'absolute', margin: '0', color: Couleurfont, fontSize: Size, fontFamily: 'impact'}}>{Textes}</p>
                    </div>
                </div>
            </div>

            <form className='Text'>
                {Etape === 3 &&
                    <p className='Positiontop'>Font position</p>} {/*texte*/}
                {Etape === 3 &&
                    <p className='Tailletexte'>Font size</p>}{/*texte*/}
                    
                    
                {Etape === 3 &&
                     <input type="range" id="select-text2" onChange={(event)=>setTop(event.target.value+'%')}/>}{/*bouton slider pour changer la position verticale du texte*/}
                {Etape === 3 &&     
                     <input type="range" id="select-text1" onChange={(event)=>setLeft(event.target.value+'%')}/>}{/*bouton slider pour changer la position horizontale du texte*/}
                <div className='AddText'>
                    {Etape === 3 &&
                        <p className='TitreAlbum'>Add text</p>}
                    <div className='AddTextBtn'>
                        {Etape === 3 &&
                            <input type="text" id="select-text" placeholder='Titre exemple...' onChange={(event)=>setTextes(event.target.value)}/>}{/*bouton ecrire nom de son album*/}
                        {Etape === 3 &&     
                            <input type="color" id="select-text3" onChange={(event)=>setCouleurfont(event.target.value)}/>}{/*bouton changer la couleur du texte*/}
                    </div>
                </div>

                {Etape === 3 &&     
                    <input type="range" id="select-text4" onChange={(event)=>setSize(event.target.value+'pt')}/>}{/*bouton modifier la taille du texte*/}
            </form>
            </>
        </div>

    );


}


export default Texte;