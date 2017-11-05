var first = document.querySelector(".first");
var second = document.querySelector(".second");
var target = document.querySelector(".target");
var b1 = document.querySelectorAll("button");
var input = document.querySelector("input");

b1[0].addEventListener("click", add1);
b1[1].addEventListener("click", add2);
b1[2].addEventListener("click", reset1);
input.addEventListener("change", changee);

function changee()
{
	target.textContent = input.value;
	first.textContent = 0;
	second.textContent = 0;
}

function add1()
{
	if(first.textContent !== target.textContent && second.textContent !== target.textContent){
		var neww = Number(first.textContent) + 1;
		first.textContent = neww;
		if(neww === Number(target.textContent))
			first.classList.add("winner");
	}
}

function add2()
{
	if(first.textContent !== target.textContent && second.textContent !== target.textContent){
		var neww = Number(second.textContent) + 1;
		second.textContent = neww;
		if(neww === Number(target.textContent))
			second.classList.add("winner");
	}
}

function reset1()
{
	first.textContent = 0;
	second.textContent = 0;
	first.classList.remove("winner");
	second.classList.remove("winner");
}