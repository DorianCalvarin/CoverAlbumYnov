import React from 'react';
import '../Texte.css';
function Texte({setEtape, Etape}) { 
    
    const [Texte, setTexte] = React.useState("");
    console.log(Etape)
    const [Top, setTop] = React.useState("10%");
    const [Left, setLeft] = React.useState("10%");
    const [Couleur, setCouleur] = React.useState("Black");
    const [Size, setSize] = React.useState("12pt");


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
            <form className='Text'>
                {Etape === 3 &&
                    <p className='TitreAlbum'>Ajouter du texte</p>}
                    {Etape === 3 &&
                    <p className='Positiontop'>Position du texte</p>}
                      {Etape === 3 &&
                    <p className='Tailletexte'>Taille du texte</p>}
                    
                    
                {Etape === 3 &&
                    <input type="text" id="select-text" placeholder='Titre exemple...' onChange={(event)=>setTexte(event.target.value)}/>}
                {Etape === 3 &&
                     <input type="range" id="select-text1" onChange={(event)=>setTop(event.target.value+'%')}/>}
                {Etape === 3 &&     
                     <input type="range" id="select-text2" onChange={(event)=>setLeft(event.target.value+'%')}/>}
                {Etape === 3 &&     
                     <input type="color" id="select-text3" onChange={(event)=>setCouleur(event.target.value)}/>}
                {Etape === 3 &&     
                     <input type="range" id="select-text4" onChange={(event)=>setSize(event.target.value+'pt')}/>}

                <div className='AlbumText'><p style={{top: Top,left: Left, position: 'absolute', margin: '0', color: Couleur, fontSize: Size, fontFamily: 'impact'}}>{Texte}</p></div>
            </form>
            </>
        </div>

    );


}


export default Texte;