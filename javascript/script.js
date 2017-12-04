document.getElementsByTagName("button")[0].addEventListener("click", function(){
	var red = document.getElementsByClassName("red")[0];
	var yellow = document.getElementsByClassName("yellow")[0];
	var green = document.getElementsByClassName("green")[0];
	var non = document.getElementsByClassName("non")[0];
	if (non != null) {
		non.classList.remove('non');
  		document.getElementsByClassName('stop')[0].classList.add('red');
	}else if (red != null){
		red.classList.remove('red');
  		document.getElementsByClassName('ready')[0].classList.add('yellow');
	}else if (yellow != null){
		yellow.classList.remove('yellow');
  		document.getElementsByClassName('go')[0].classList.add('green');
	}
 	
});