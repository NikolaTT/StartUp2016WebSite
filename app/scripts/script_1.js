//used to store the current tab so that it's easy to reference the current tab
var currentTab = "";

window.onload = function(){
	currentTab = "Conference"

	//we take all the tab selectors (like Conference, Weekend, etc.)
	var tabSelectors = document.getElementsByClassName('tab_selectors');

	//and then we iterate over them, setting their onclick behavior
	//first we make the current tab hidden
	//and then we make the desired tab visible
	for(var i = 0; i < tabSelectors.length; i++){
		tabSelectors[i].onclick = function(){
			document.getElementById(currentTab).style.display = "none";
			var tabToView = this.getAttribute("href");
			tabToView = tabToView.substring(1);
			document.getElementById(tabToView).style.display = "inline";
			currentTab = tabToView;
		};
	}
};