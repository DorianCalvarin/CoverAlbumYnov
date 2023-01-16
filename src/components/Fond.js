import React from 'react';
import '../Fond.css';
function Fond({setEtape, Etape}) {

    const [Couleur, setCouleur] = React.useState("White");
    
    return (
        <div>
                <>
            <div class="Ariane"> 
            {Etape === 1 && <h1 class="Couleurfond">Couleur de fond</h1>}
            {Etape === 1 && 
                <div class="rectangles5">
                    <div class="R1"></div>
                    <div class="R2"></div>
                    <div class="R3"></div>
                    <div class="R4"></div>
                    <div class="R5"></div>
                </div>
                }
            </div>

            
            <form class="BlocColorPicker">
                {Etape === 1 &&
                <p class="TextColorPicker">Choisi la couleur de fond de ta pochette :</p>}
                {Etape === 1 &&
                <input type="color" id="color-picker" name="color-picker" onChange={(event)=>setCouleur(event.target.value)}/>}
                <div class="Album" style={{backgroundColor: Couleur}}></div>
            </form>
        
            
        </>

        
        </div>

    );


}


export default Fond;