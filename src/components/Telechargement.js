import React from 'react';
import '../Telechargement.css';
import html2canvas from "html2canvas";

function Telechargement({setEtape, Etape}) { 

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
            <div>
                <>
                <div className='Ariane'> 
                    {Etape === 5 && <h1 className='Couleurfond'>Téléchargement</h1>}
                    {Etape === 5 && 
                        <div className='rectangles5'>
                            <div className='R5'></div>
                            <div className='R2'></div>
                            <div className='R3'></div>
                            <div className='R4'></div>
                            <div className='R1'></div>
                        </div>
                    }
                </div>

                <div id='art' ref={ToCaptureRef}>
                    
                </div>
                <div className='BlocCapture'>
                    <p className='TextColorPicker'>Clique pour télécharger ta cover !</p>
                    <button onClick={()=>captureScreenshot()} id='ScreenShot'>ScreenShot</button>
                </div>
                </>
            </div>

        );
    }


export default Telechargement;