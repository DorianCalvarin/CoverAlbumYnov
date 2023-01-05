import React from 'react';
import '../flip.css';

function Flip() {
  return (
		<div class="all">
			<div class="content">
				<div class="RectangleGauche">
					<h1>Music is also shared through the eyes </h1>
					<p class="intro">
						Our website allows artists to create unique and original album covers using 
						our online generative design tool.
					</p>
				</div>
				<div class="Droit">
					<div class="Menu">
						<div class="m1">
							<p>What is Flip ?</p>
						</div>
						<div class="m2">
							<p>Album cover generator</p>
						</div>
						<div class="m3">
							<p>Generative Design</p>
						</div>
					</div>
				</div>
			</div>
			<div class="Content2">
				<div class="Gauche2">
					<img src=''></img>
					<p class="intro">
						A few minutes, some inspiration, and a bit of creativity are all you need.
					</p>
				</div>
				<div class="Droit2">
					<h2>Start building your unique album cover </h2>
					<div class="GetStart">
						<button>Get started</button>
					</div>
				</div>
			</div>
			<div class="Content3">
				<div class="Gauche3">
					<h3>How does generative design works? </h3>
					<p class="intro">
						It involves feeding the software with certain parameters and constraints, 
						and then letting it generate a variety of design options based on those parameters.
					</p>
				</div>
				<div class="Droit3">
					
				</div>
			</div>
		</div>
      );
}


export default Flip;