import React from 'react';
import '../Creationalbum.css';
import Fond from './Fond';
import Motifs from './Motifs';
import Texte from './Texte';
import Telechargement from './Telechargement';

function Creationalbum() {
    
    const [Etape, setEtape] = React.useState(1);
    const [Couleur, setCouleur] = React.useState("White");
    const [colors, setColors] = React.useState([]);
    const [colorSVGvalue, setColorSVGvalue] = React.useState(0);
    const [jsSVGpath, setJsSVGpath] = React.useState('');
    const [Textes, setTextes] = React.useState("");
    const [Top, setTop] = React.useState("10%");
    const [Left, setLeft] = React.useState("10%");
    const [Couleurfont, setCouleurfont] = React.useState("Black");
    const [Size, setSize] = React.useState("12pt"); 

    const ToCaptureRef = React.useRef() // ref

    return (
        <div className='All'>
            <div className='next'>{/*boutons permettant de passer à l'étape suivante (positionnés aux extrémintés droites et gauches)*/}
                {Etape > 1 && <div className='RecGauche'onClick={() => setEtape(Etape-1)}></div>}
                {Etape < 4 &&<div className='RecDroite'onClick={() => setEtape(Etape+1)}></div>}
                <div className='Fleches'>
                    <div className='FlecheG'>
                        {Etape > 1 && <img src="/FlecheG.png" onClick={() => setEtape(Etape-1)}  alt='fleche clicable gauche'></img>}
                    </div>
                    <div className='FlecheD'>
                        {Etape < 4 && <img src="/FlecheD.png" onClick={() => setEtape(Etape+1)}  alt='Fleche clibable Droite'></img>}
                    </div>
                </div>
            </div>   

            <div className='Logo'>{/*logo flip en haut à gauche*/}
                <a href='src\components\Flip.js'><img src="/logoflip.png" alt='logo de flip'></img></a>  
            </div>

            <div className='AnimFormes'> {/*Formes animés arrière plan*/}
                <div className='box'><b></b></div>
                <div className='box2'><b></b></div>
                <div className='box3'><b></b></div>
                <div className='box4'><b></b></div>
                <div className='box5'><b></b></div>
                <div className='box6'><b></b></div>
            </div>
        
            
            <div ref={ToCaptureRef}>
            {Etape >= 1 && <div className='Etape1'><Fond    setEtape={setEtape} Etape={Etape} 
                                                            setCouleur={setCouleur} Couleur={Couleur}>
                                                    </Fond></div>}

            {Etape >= 2 && <div className='Etape2'><Motifs  setEtape={setEtape} Etape={Etape} 
                                                            setColors={setColors} colors={colors}
                                                            setColorSVGvalue={setColorSVGvalue} colorSVGvalue={colorSVGvalue}
                                                            setJsSVGpath={setJsSVGpath} jsSVGpath={jsSVGpath}>
                                                    </Motifs></div>}

            {Etape >= 3 && <div className='Etape3'><Texte   setEtape={setEtape} Etape={Etape} 
                                                            setTextes={setTextes} Textes={Textes}
                                                            setTop={setTop} Top={Top}
                                                            setLeft={setLeft} Left={Left}
                                                            setCouleurfont={setCouleurfont} Couleurfont={Couleurfont}
                                                            setSize={setSize} Size={Size}>
                                                    
                                                    </Texte></div>}
            
            {Etape >= 4 && <div className='Etape5'> <Telechargement setEtape={setEtape} Etape={Etape} 
                                                                    Couleur={Couleur} 
                                                                    colors={colors}
                                                                    colorSVGvalue={colorSVGvalue}
                                                                    jsSVGpath={jsSVGpath}
                                                                    Textes={Textes}
                                                                    Top={Top}
                                                                    Left={Left}
                                                                    Couleurfont={Couleurfont}
                                                                    Size={Size}>
                                                    </Telechargement></div>}
            </div>
        </div>
    );
}


export default Creationalbum;