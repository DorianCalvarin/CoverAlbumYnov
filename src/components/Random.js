/*// this is an array of possible background colors.
var colors = [];
while (colors.length < 100) {
    colors.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
}

// random number generator
function rand(frm, to) {
    return ~~(Math.random() * (to - frm)) + frm;
}

// random number generator
function rand(frm, to) {
    return ~~(Math.random() * (to - frm)) + frm;
}

//this function generates a random number inside a range
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this selects the art div and the svg from the HTML panel
var art = document.getElementById("art");
var clickAbleSVG = document.getElementById("clickAbleSVG");

// the randomColor function chooses a color at random from the colors array and sets it as the background color for the art div
function randomColor() {
	var colorSVGvalue = randomNumber(0, colors.length);
	jsSVGpath.setAttribute("fill", colors[colorSVGvalue]);
}

//the generateArt function generates a string as attribute for the jsSVGpath
function generateArt() {
	let tmp = "",
		tmp1 = "",
		i,
		x,
		y;
	for (i = 0; i < randomNumber(8, 15) * 2; i++) {
		x = Math.floor(Math.random() * 500);
		y = Math.floor(Math.random() * 500);
		tmp += i === 0 ? " M" : " L";
		tmp1 += i == 0 ? " M" : " L";
		tmp += " " + x + " " + y;
		tmp1 += " " + (500 - x) + " " + y;
	}
	jsSVGpath.setAttribute("d", tmp + " " + tmp1);
	console.log(tmp + " " + tmp1);
}

clickAbleSVG.addEventListener("click", function () {
	randomColor();
	generateArt();
});

randomColor();
generateArt();*/
