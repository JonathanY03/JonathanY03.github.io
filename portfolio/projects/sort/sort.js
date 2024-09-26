let canvas;
let ctx;

let num_elems;
let algo;
const elem5 = [];

// Event listeners
window.addEventListener("load", init);
var form = document.getElementById("sort_choice");
form.addEventListener("submit", restart);

// Initialize the canvas and call run().
function init()
{
	canvas = document.getElementById("visualize_sort");
	ctx = canvas.getContext("2d");
	run();
}

// Runs the animation.
function run()
{
	// ctx.fillRect(10, 10, 50, 50);
}

function restart()
{
	// Restarts the sort.
}


function randomize()
{
	// Randomizes the elements.
}

function bogo()
{
	// While not sorted, randomize.
}

