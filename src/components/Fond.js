import React from 'react';
import '../Fond.css';
function Fond({setEtape, Etape}) {

    const [Couleur, setCouleur] = React.useState("White");
    
    return (
        <div>
            {Etape === 1 && 

            
            
            <form>
                <input type="color" id="color-picker" name="color-picker" onChange={(event)=>setCouleur(event.target.value)}/>
                <div class="Album" style={{backgroundColor: Couleur}}></div>
            </form>
            
        

        }
        </div>

    );


}


export default Fond;