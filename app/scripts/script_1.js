//used to store the current tab so that it's easy to reference the current tab
var currentTab = "";

window.onload = function(){
	currentTab = "Conference"

	var tabSelectors = document.getElementsByClassName('tab_selectors');

	for(var i = 0; i < tabSelectors.length; i++){
		tabSelectors[i].onclick = function(){
			document.getElementById(currentTab).style.display = "none";
			var test = this.getAttribute("href");
			test = test.substring(1);
			document.getElementById(test).style.display = "inline";
			currentTab = test;
		};
	}
};