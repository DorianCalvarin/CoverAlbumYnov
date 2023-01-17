import React from 'react';
import '../Texte.css';
function Texte({setEtape, Etape}) { 
    
    const [Texte, setTexte] = React.useState("");
    console.log(Etape)
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
                    <p className='TitreAlbum'>Ajoute du texte</p>}
                {Etape === 3 &&
                    <input type="text" id="select-text" name="text" placeholder='Titre exemple...' onChange={(event)=>setTexte(event.target.value)}/>}
                <div className='AlbumText'><p>{Texte}</p></div>
            </form>
            </>
        </div>

    );


}


export default Texte;