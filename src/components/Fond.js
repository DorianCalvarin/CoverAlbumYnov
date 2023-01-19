import React from 'react';
import '../Fond.css';
function Fond({setEtape, Etape}) {

    const [Couleur, setCouleur] = React.useState("White");
    
    return (
        <div>
                <>
            <div className='Ariane'> 
            {Etape === 1 && <h1 className='Couleurfond'>Couleur de fond</h1>} 
            {Etape === 1 && 
                <div className='rectangles5'>
                    <div className='R1'></div>
                    <div className='R2'></div>
                    <div className='R3'></div>
                    <div className='R4'></div>
                    <div className='R5'></div> 
                </div>
                }
            </div>

            
            <form className='BlocColorPicker'>
                {Etape === 1 &&
                <p className='TextColorPicker'>Choisi la couleur de fond de ta pochette :</p>}
                {Etape === 1 &&
                <input type="color" id="color-picker" name="color-picker" onChange={(event)=>setCouleur(event.target.value)}/>}
                <div className='Album' style={{backgroundColor: Couleur}}></div>
            </form>
        
            
        </>

        
        </div>

    );


}


export default Fond;