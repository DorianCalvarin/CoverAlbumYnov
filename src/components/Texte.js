import React from 'react';
import '../Texte.css';
function Texte({setEtape, Etape}) { 
    
    const [Texte, setTexte] = React.useState("Titre");
    console.log(Etape)
    return (
        <div>

            <>
            <div class="Ariane"> 
                <h1 class="Couleurfond">Texte</h1>
                <div class="rectangles5">
                    <div class="R3"></div>
                    <div class="R2"></div>
                    <div class="R1"></div>
                    <div class="R4"></div>
                    <div class="R5"></div>
                </div>
            </div>
            <form class="Text">
                {Etape === 3 &&
                <input type="text" id="select-text" name="text" onChange={(event)=>setTexte(event.target.value)}/>}
                <div className='AlbumText'><p>{Texte}</p></div>
            </form>
            </>
        </div>

    );


}


export default Texte;