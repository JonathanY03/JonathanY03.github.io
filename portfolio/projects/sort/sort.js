let canvas;
let ctx;

let algo;
let length;
const elems = [];

// Event listeners
window.addEventListener("load", init);
var form = document.getElementById("sort_choice");
form.addEventListener("submit", restart);

// Initialize the canvas and call run().
function init()
{
	canvas = document.getElementById("visualize_sort");
	ctx = canvas.getContext("2d");
}

// Runs the animation.
function run(elems, algo)
{
	// ctx.fillRect(10, 10, 50, 50);
}

function restart()
{
	for (let i = 0; i < length; i++) elems.pop();
	algo = document.forms["sort_choice"]["algorithm"].value;
	length = document.forms["sort_choice"]["size"].value;
	for (let i = 0; i < length; i++) elems.push(i+1);
	randomize(elems);
	run(elems, algo);
}


function randomize(elems)
{
	for (let i = 0; i < elems.length; i++) 
	{
		let j = Math.floor(Math.random() * i);
		[elems[i], elems[j]] = [elems[j], elems[i]];
	}
}

function bubble()
{
	// While not sorted, randomize.
}

