document.getElementsByTagName("button")[0].addEventListener("click", function(){
	var first = document.getElementsByClassName("stop")[0];
	var second = document.getElementsByClassName("ready")[0];
	var therd = document.getElementsByClassName("go")[0];
	if (first == null){
		this.classList.add("red")
	}
 	
});