import React from 'react';
import '../Fond.css';
function Fond({setEtape, Etape, setCouleur, Couleur}) {
     
    return (
        <div className='Allfond'>
                <>
            <div className='Ariane'> {/*Menu*/}
            {Etape === 1 && <h1 className='Couleurfond'>Background color</h1>} 
            {Etape === 1 && 
                <div className='rectangles4'>
                    <div className='R1'></div>
                    <div className='R2'></div>
                    <div className='R3'></div>
                    <div className='R5'></div> 
                </div>
                }
            </div>
            
            <div className="Wrapper">{/*bloc contenant la cover*/}
                <div className="AlbumContainer">
                    <div className='Album'></div>
                    <div className="AlbumEtape" style={{backgroundColor: Couleur}}></div>
                </div>
            </div>


            
            <form className='BlocColorPicker'>
                {Etape === 1 &&
                <p className='TextColorPicker'>Choose the background color of your cover:</p>}{/*texte en bas de la page*/}
                {Etape === 1 &&
                <input type="color" id="color-picker" name="color-picker" onChange={(event)=>setCouleur(event.target.value)}/>}{/*bouton pour changer la couleur du fond de la cover*/}
                
            </form>
        
            
        </>

        
        </div>

    );


}


export default Fond;