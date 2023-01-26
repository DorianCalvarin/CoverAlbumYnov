import React from 'react';
import '../Telechargement.css';
import html2canvas from "html2canvas";

function Telechargement({setEtape, Etape, Couleur, colors, colorSVGvalue, jsSVGpath, Textes, Top, Left, Couleurfont, Size}) { 

    const ToCaptureRef = React.useRef() // ref

   const captureScreenshot=()=> {
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
            <div>
                <>
                <div className='Ariane'> 
                    {Etape === 4 && <h1 className='Couleurfond'>Download</h1>}
                    {Etape === 4 && 
                        <div className='rectangles4'>
                            <div className='R5'></div>
                            <div className='R2'></div>
                            <div className='R3'></div>
                            <div className='R1'></div>
                        </div>
                    }
                </div>

                <div className="Wrapper">
                    <div className="AlbumContainer" ref={ToCaptureRef}>
                        <div className='Album'></div>
                        <div id='art'></div>
                        <div className='AlbumText'></div>
                        <div className="AlbumEtape" style={{backgroundColor: Couleur}}>
                            <svg id="clickAbleSVG">
                                    <path  fill={colorSVGvalue} d={jsSVGpath}/>
                            </svg>
                            <p style={{top: Top,left: Left, position: 'absolute', margin: '0', color: Couleurfont, fontSize: Size, fontFamily: 'impact'}}>{Textes}</p>
                        </div>
                    </div>
                </div>

                <div className='BlocCapture'>
                    <p className='TextPicker'>Click to download your cover !</p>
                    <button onClick={()=>captureScreenshot()} id='ScreenShot'>Download</button>
                </div>

                <div className='Vinyle'>
                    <img src='/vinyl.png' alt='vinyle' id='vinyle'></img>
                </div>
                </>
            </div>

        );
    }


export default Telechargement;