var css = document.querySelectorAll("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(event) {
	var loc = event.currentTarget.param;
	body.style.background = 
	"linear-gradient(to " + loc + ", "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	if (loc === "right") {
		css[0].textContent = body.style.background + ";";
	} else {
		css[1].textContent = body.style.background + ";";
	}
}


color1.addEventListener("input", setGradient);
color1.param = "right";

color2.addEventListener("input", setGradient);
color2.param = "right ";

// rgb(0,245,0) to right and rgb(0,255,251) to left