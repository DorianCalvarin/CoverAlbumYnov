import React from 'react';
import '../flip.css';



function Flip({
setModifPage
}) {
  return (
		<div class="all" id='1'>
			<div class="content">
				<div class="RectangleGauche">
					<img src='/logonb.png' class="logo" alt='logo_flip'></img>
					<h1>Music is also shared through <span>the eyes</span> </h1>
					<p class="intro">
						Our website allows artists to create unique and original album covers using 
						our online generative design tool.
					</p>
				</div>
				<div class="Droit">
					<div class="Menu">
						<a href='#1'class="lien1">
							<div class="m1">
								<p>What is Flip ?</p>
							</div>
						</a>
						<a href='#2' class="lien2">
							<div class="m2">
								<p>Album cover generator</p>
							</div>
						</a>
						<a href='#3' class="lien3">
							<div class="m3">
								<p>Generative Design</p>
							</div>
						</a>
					</div>

					<div class="RectMusic">
						<div class="RectMusic1"></div>
						<div class="RectMusic2"></div>
						<div class="RectMusic3"></div>
						<div class="RectMusic4"></div>
						<div class="RectMusic5"></div>
						<div class="RectMusic6"></div>
						<div class="RectMusic7"></div>
					</div>
				</div>
			</div>
			<div class="Content2" id="2">
				<div class="Gauche2">
					<img src='/coverdesign.png' class='coverdesign' alt='cover design'></img>
					<p class="intro">
						A few minutes, some inspiration, and a bit of creativity are all you need.
					</p>
				</div>
				<div class="Droit2">
					<h2>Start building your <span>unique</span> album cover </h2>
					<div class="GetStart" onClick={() => setModifPage("Creationalbum")}>
						<button class="custom-btn btn-15">Get started</button>
					</div>
				</div>
			</div>
			<div class="Content3" id='3'>
				<div class="Gauche3">
					<h3>How does <span>generative design</span> works? </h3>
					<p class="intro">
						It involves feeding the software with certain parameters and constraints, 
						and then letting it generate a variety of design options based on those parameters.
					</p>
				</div>
				<div class="Droit3">
					<img src='\fondbas.png' class='fondbas' alt='illustration'></img>
				</div>
			</div>
		</div>
      );
}


export default Flip;