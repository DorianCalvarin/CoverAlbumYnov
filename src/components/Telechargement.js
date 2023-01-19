import React from 'react';
import '../Telechargement.css';
import html2canvas from "html2canvas";

function Telechargement({setEtape, Etape}) { 
/*
    const App = ()=> {
    const ToCaptureRef = React.useRef() // ref

    captureScreenshot(); {
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
            a.innerHTML = "DOWNLOAD";
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
    render(); {
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

                <div ref={ToCaptureRef}>
                    <h1>Hello hello</h1>
                    <img
                    alt="temp"
                    style={{ width: "500px" }}
                    src="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <button onClick={()=>captureScreenshot}>ScreenShot</button>
                </div>

                </>
            </div>

        );
    }
}

*/


}


export default Telechargement;