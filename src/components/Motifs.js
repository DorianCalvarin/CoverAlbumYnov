import React from 'react';
import '../Motifs.css';

function Motifs({setEtape, Etape}) { 

    const [colors, setColors] = React.useState([]);

  // State to store the current color and path of the SVG
  const [colorSVGvalue, setColorSVGvalue] = React.useState(0);
  const [jsSVGpath, setJsSVGpath] = React.useState('');

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
    for (i = 0; i < randomNumber(8, 12) * 2; i++) {
      x = Math.floor(Math.random() * 350);
      y = Math.floor(Math.random() * 350);
      tmp += i === 0 ? " M" : " L";
      tmp1 += i == 0 ? " M" : " L";
      tmp += " " + x + " " + y;
      tmp1 += " " + (385 - x) + " " + y;
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
                
                  <div class="container">
                      <div id="art">
                          <svg id="clickAbleSVG">
                          {Etape >= 2 &&
                              <path id="jsSVGpath" fill={colors[colorSVGvalue]} d={jsSVGpath}/>}
                          </svg>
                      </div>
                  
                      <div class="buttons">
                        {Etape === 2 &&
                          <button onClick={()=>randomColor()}>New Random Colors</button>}
                        {Etape === 2 &&
                          <button onClick={()=>generateArt()}>New Random Pattern</button>}
                      </div> 
                    </div>               
            </>
            
        </div>
    );
}


export default Motifs;