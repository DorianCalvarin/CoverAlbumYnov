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

            
            
            {Etape >= 1 && <div className='Etape1'><Fond setEtape={setEtape} Etape={Etape}></Fond></div>}

            {Etape >= 2 &&  <div className='Etape2'><Motifs setEtape={setEtape} Etape={Etape}></Motifs></div>}

            {Etape >= 3 && <div className='Etape3'><Texte setEtape={setEtape} Etape={Etape}></Texte></div>}
            
            {Etape >= 4 && <div className='Etape4'> <Filtre setEtape={setEtape} Etape={Etape}></Filtre></div>} 

            {Etape >= 5 && <div className='Etape5'> <Telechargement setEtape={setEtape} Etape={Etape}></Telechargement></div>}

        </div>
    );
}


export default Creationalbum;