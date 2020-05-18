

// // changing individual properties with code and using setInterval
 var rotationSpeed = 0.01;
 var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
 	myOtherBox.object3D.rotation.x -= rotationSpeed;
	myOtherBox.object3D.rotation.y -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
 }

 setInterval(spin, 16); //equivalent to 60 fps

from: ({
	scale: .7,
	opacity: 0;
	y: 0
},

to: {
	scale: 1,
	opacity: 1,
	y: 0
},
duration: 1000
}).start(container.set)











