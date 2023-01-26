import React from 'react';
import '../Motifs.css';

function Motifs({setEtape, Etape, Setcolors, colors, colorSVGvalue, setColorSVGvalue, jsSVGpath, setJsSVGpath}) {

  // Generate an array of possible background colors
  const generateColors = () => {
    while (colors.length < 100) {
      colors.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
    }
  };

  // Random number generator
  const rand = (frm, to) => {
    return ~~(Math.random() * (to - frm)) + frm;
  };

  // Generate a random number inside a range
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Choose a color at random from the colors array and set it as the background color for the art div
  const randomColor = () => {
    setColorSVGvalue(randomNumber(0, colors.length));
  };

  // Generate a string as an attribute for the jsSVGpath
  const generateArt = () => {
    let tmp = "",
      tmp1 = "",
      i,
      x,
      y;
    let width = window.innerWidth*0.25
    let height = window.innerWidth*0.5
    for (i = 0; i < randomNumber(8, 12) * 2; i++) {
      x = Math.floor(Math.random() * width);
      y = Math.floor(Math.random() * width);
      tmp += i === 0 ? " M" : " L";
      tmp1 += i === 0 ? " M" : " L";
      tmp += " " + x + " " + y;
      tmp1 += " " + (width - x) + " " + y;
    }
    setJsSVGpath(tmp + " " + tmp1);
  };

  // Handle click event on the SVG
  const handleClick = () => {
    randomColor();
    generateArt();
  };

  // Generate colors and art when the component mounts
  React.useEffect(() => {
    generateColors();
    randomColor();
    generateArt();
  }, []);
    


    return (
        <div>
            <>
                <div className='Ariane'> 
                    {Etape === 2 && <h1 className='Couleurfond'>Motifs</h1>}
                    {Etape === 2 && 
                        <div className='rectangles5'>
                            <div className='R2'></div>
                            <div className='R1'></div>
                            <div className='R3'></div>
                            <div className='R4'></div>
                            <div className='R5'></div>
                        </div>
                    }
                </div>
                                  
                <div className="Wrapper">
                    <div className="AlbumContainer">
                        <div id='art'></div>
                        <div className='AlbumText'></div>
                        <div className="AlbumEtape">
                            <svg id="clickAbleSVG">
                                <path  fill={colorSVGvalue} d={jsSVGpath}/>
                            </svg>
                        </div>
                    </div>
                </div>
                  
                <div class="buttons">
                  {Etape === 2 &&
                    <input type="color" id="ColorPatern" onChange={(event)=>setColorSVGvalue(event.target.value)}/>}
                  {Etape === 2 &&
                    <button className='BtnRandomPat' onClick={()=>generateArt()}>Génèrer un motif aléatoire</button>}
                </div> 
                       
            </>
            
        </div>
    );
}


export default Motifs;