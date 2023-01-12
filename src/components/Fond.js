import React from 'react';
import '../Fond.css';
import '../Creationalbum.css';
function Fond({setEtape, Etape}) {

    const [Couleur, setCouleur] = React.useState("White");
    
    return (
        <div>
            {Etape === 1 && 
                <>
            <div class="Ariane"> 
                <h1 class="Couleurfond">Couleur de fond</h1>
                <div class="5rectangles">
                    <div class="R1"></div>
                    <div class="R2"></div>
                    <div class="R3"></div>
                    <div class="R4"></div>
                    <div class="R5"></div>
                </div>
            </div>

            
            <form>
                <input type="color" id="color-picker" name="color-picker" onChange={(event)=>setCouleur(event.target.value)}/>
                <div class="Album" style={{backgroundColor: Couleur}}></div>
            </form>
            
        </>

        }
        </div>

    );


}


export default Fond;