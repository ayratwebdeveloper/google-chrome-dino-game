const dinosaur = document.getElementById("dino")
const cactus =document.getElementById("cactus")

document.addEventListener("keydown", function(event) {
	jump();
}) 

function jump() {
	if(dinosaur.classList != "jump") {
		dinosaur.classList.add("jump")
	}
	setTimeout( function() {
		dinosaur.classList.remove("jump")
	}, 300)
}

let isAlive = setInterval ( function() {
	let dinosaurTop = parseInt (window.getComputedStyle(dinosaur).getPropertyValue("top"));
	let cactusLeft = parseInt (window.getComputedStyle(cactus).getPropertyValue("left"))

	if(cactusLeft <50 && cactusLeft >0 && dinosaurTop >= 140){
		alert("Ну вот! Пробуй снова")
	}
}, 10)