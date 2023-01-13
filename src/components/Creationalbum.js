import React from 'react';
import '../Creationalbum.css';
import Fond from './Fond';
import Motifs from './Motifs';
import Texte from './Texte';
import Filtre from './Filtre';
import Telechargement from './Telechargement'; 

function Creationalbum() {
    
    const [Etape, setEtape] = React.useState(1);

    return (
        <div class="All">
            <div class="next">
                {Etape > 1 && <div class="RecGauche"onClick={() => setEtape(Etape-1)}></div>}
                {Etape < 5 &&<div class="RecDroite"onClick={() => setEtape(Etape+1)}></div>}
                <div class="Fleches">
                    <div Class="FlecheG">
                    {Etape > 1 && <img src="/FlecheG.png"onClick={() => setEtape(Etape-1)}></img>}
                    
                    </div>
                    <div class="FlecheD">
                        {Etape < 5 && <img src="/FlecheD.png"onClick={() => setEtape(Etape+1)}></img>}
                    </div>
                </div>
            </div>   

            <div class="Logo" >
                <img src="/logoflip.png"></img>  
            </div> 

            <div class="AnimFormes">
                <div class="box"><b></b></div>
                <div class="box2"><b></b></div>
                <div class="box3"><b></b></div>
                <div class="box4"><b></b></div>
                <div class="box5"><b></b></div>
                <div class="box6"><b></b></div>
            </div>

            
            <div class="Etape1">
                {Etape >= 1 && <Fond setEtape={setEtape} Etape={Etape}></Fond>}
            </div>
            <div class="Etape2">
                {Etape >= 2 && <Motifs setEtape={setEtape} Etape={Etape}></Motifs>}
            </div>
            <div class="Etape3">
                {Etape >= 3 && <Texte setEtape={setEtape} Etape={Etape}></Texte>}
            </div>
            <div class="Etape4">
                {Etape >= 4 && <Filtre setEtape={setEtape} Etape={Etape}></Filtre>} 
            </div>
            <div class="Etape5">
                {Etape >= 5 && <Telechargement setEtape={setEtape} Etape={Etape}></Telechargement>}
            </div>

        </div>
    );
}


export default Creationalbum;