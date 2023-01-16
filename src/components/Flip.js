import React from 'react';
import '../flip.css';



function Flip({
setModifPage
}) {
  return (
		<div className='all' id='1'>
			<div className='content'>
				<div className='RectangleGauche'>
					<img src='/logonb.png' className='logo' alt='logo_flip'></img>
					<h1>Music is also shared through <span>the eyes</span> </h1>
					<p className='intro'>
						Our website allows artists to create unique and original album covers using 
						our online generative design tool.
					</p>
				</div>
				<div className='Droit'>
					<div className='Menu'>
						<a href='#1'className='lien1'>
							<div className='m1'>
								<p>What is Flip ?</p>
							</div>
						</a>
						<a href='#2' className='lien2'>
							<div className='m2'>
								<p>Album cover generator</p>
							</div>
						</a>
						<a href='#3' className='lien3'>
							<div className='m3'>
								<p>Generative Design</p>
							</div>
						</a>
					</div>

					<div className='RectMusic'>
						<div className='RectMusic1'></div>
						<div className='RectMusic2'></div>
						<div className='RectMusic3'></div>
						<div className='RectMusic4'></div>
						<div className='RectMusic5'></div>
						<div className='RectMusic6'></div>
						<div className='RectMusic7'></div>
					</div>
				</div>
			</div>
			<div className='Content2' id="2">
				<div className='Gauche2'>
					<img src='/coverdesign.png' className='coverdesign' alt='cover design'></img>
					<p className='intro'>
						A few minutes, some inspiration, and a bit of creativity are all you need.
					</p>
				</div>
				<div className='Droit2'>
					<h2>Start building your <span>unique</span> album cover </h2>
					<div className='GetStart' onClick={() => setModifPage("Creationalbum")}>
						<button className='custom-btn btn-15'>Get started</button>
					</div>
				</div>
			</div>
			<div className='Content3' id='3'>
				<div className='Gauche3'>
					<h3>How does <span>generative design</span> works? </h3>
					<p className='intro'>
						It involves feeding the software with certain parameters and constraints, 
						and then letting it generate a variety of design options based on those parameters.
					</p>
				</div>
				<div className='Droit3'>
					<img src='\fondbas.png' className='fondbas' alt='illustration'></img>
				</div>
			</div>
		</div>
      );
}


export default Flip;