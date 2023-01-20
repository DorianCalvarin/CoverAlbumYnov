import React from 'react';
import '../Creationalbum.css';
import Fond from './Fond';
import Motifs from './Motifs';
import Texte from './Texte';
import Filtre from './Filtre';
import Telechargement from './Telechargement'; 
import html2canvas from "html2canvas";

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

   function captureScreenshot() {
        var canvasPromise = html2canvas(ToCaptureRef.current, {
          useCORS: true
        });
        canvasPromise.then((canvas)=> {
            var dataURL = canvas.toDataURL("image/png");
            // Create an image element from the data URL
            var img = new Image();
            img.src = dataURL;
            img.download = dataURL;
            // Create a link element
            var a = document.createElement("a");
            a.target = "_blank";
            // Set the href of the link to the data URL of the image
            a.href = img.src;
            // Set the download attribute of the link
            a.download = img.download;
            // Append the link to the page
            document.body.appendChild(a);
            // Click the link to trigger the download
            a.click();
        });

   }

    return (
        <div className='All'>
            <div className='next'>
                {Etape > 1 && <div className='RecGauche'onClick={() => setEtape(Etape-1)}></div>}
                {Etape < 5 &&<div className='RecDroite'onClick={() => setEtape(Etape+1)}></div>}
                <div className='Fleches'>
                    <div className='FlecheG'>
                        {Etape > 1 && <img src="/FlecheG.png" onClick={() => setEtape(Etape-1)}  alt='fleche clicable gauche'></img>}
                    </div>
                    <div className='FlecheD'>
                        {Etape < 5 && <img src="/FlecheD.png" onClick={() => setEtape(Etape+1)}  alt='Fleche clibable Droite'></img>}
                    </div>
                </div>
            </div>   

            <div className='Logo'>
                <img src="/logoflip.png" alt='logo de flip'></img>  
            </div> 
            
            <div className='AnimFormes'>
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
            
            {Etape >= 4 && <div className='Etape4'> <Filtre setEtape={setEtape} Etape={Etape}></Filtre></div>} 

            {Etape >= 5 && <div className='Etape5'> <Telechargement setEtape={setEtape} Etape={Etape} 
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