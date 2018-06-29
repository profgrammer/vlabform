var steps = document.getElementsByClassName("step");
var content = document.getElementsByClassName("content");
var reset = document.querySelector("#reset");
var next = document.querySelector("#next");
var pre = document.querySelector("#pre");


function currentStep(){
	for(var i = 0;i < steps.length;i++){
		if(steps[i].classList.contains("current")){
			return i;
		}
	}
}

function activate(element){
	
	var curr = 0;
	for(var i = 0;i < steps.length;i++){
		steps[i].classList.remove("current");
	}
	element.classList.add("current");

	for(var i = 0;i < steps.length;i++){
		if(steps[i].classList.contains("current")){
			content[i].classList.add("currentStep");
		}
		else content[i].classList.remove("currentStep");
	}

	var c = currentStep();
	for(var i = 0; i < steps.length; i++){
		if(i < c){
			steps[i].classList.add("completed");
			steps[i].classList.remove("current");
			steps[i].classList.remove("remaining");
		}
		else if(i == c){
			steps[i].classList.add("current");
			steps[i].classList.remove("completed");
			steps[i].classList.remove("remaining");
		}
		else if(i > c){
			steps[i].classList.add("remaining");
			steps[i].classList.remove("current");
			steps[i].classList.remove("completed");
		}
	}
}

reset.addEventListener("click", function(){
	activate(steps[0]);
	next.innerHTML = "NEXT";
});

next.addEventListener("click", function(){
	var c = currentStep() + 1;
	if(c < steps.length) {
		activate(steps[c]);
		if(c == steps.length - 1) this.innerHTML = "FINISH";
	}
	
});

pre.addEventListener("click", function(){
	var c = currentStep();
	if(c > 0) activate(steps[c - 1]);
	next.innerHTML = "NEXT";
});