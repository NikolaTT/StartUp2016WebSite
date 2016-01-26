//used to store the current tab so that it's easy to reference the current tab
var currentTab = "";
var initialTabSelector = "";
var tabContentClass = "tab-content";

window.onload = function(){

	var tabContents = document.getElementsByClassName(tabContentClass);
	for(var j = 0; j < tabContents.length; j++){
		tabContents[j].style.display = "none";
	}

	currentTab = "conference";
	initialTabSelector = "conference-tab-selector";

	document.getElementById(initialTabSelector).style.backgroundColor = "#000000";

	document.getElementById(currentTab).style.display = "flex";

	//we take all the tab selectors (like Conference, Weekend, etc.)
	var tabSelectors = document.getElementsByClassName('tab-selectors');

	//and then we iterate over them, setting their onclick behavior
	//first we make the current tab hidden
	//and then we make the desired tab visible
	for(var i = 0; i < tabSelectors.length; i++){
		tabSelectors[i].onclick = function(){
			clearTabSelectorsBGColor();
			this.style.backgroundColor = "#000000";
			document.getElementById(currentTab).style.display = "none";
			var tabToView = this.getAttribute("href");
			tabToView = tabToView.substring(1);
			document.getElementById(tabToView).style.display = "flex";
			currentTab = tabToView;
		};
	}

	//set the margin of the text to a negative value
	//to pull it back up
	// var startupLogoText = document.getElementById('startup_logo_text');
	// var startupLogoImage = document.getElementById('startup_logo_image');
	
	//centerElement(startupLogoText, false);
	//centerElement(startupLogoImage, true);
};

// var centerElement = function(elementToCenter, topOrBottom){
// 	var parentHeight = elementToCenter.parentElement.offsetHeight;
// 	var elementHeight = elementToCenter.offsetHeight;

// 	var amountToOffset = parentHeight - elementHeight;
// 	amountToOffset /= 2.0;

// 	var direction = topOrBottom ? "top: -" : "bottom: -";

// 	elementToCenter.setAttribute("style", direction + amountToOffset.toString() + "px");
// }

var clearTabSelectorsBGColor = function(){
	var tabSelectors = document.getElementsByClassName('tab-selectors');


	for(var i = 0; i < tabSelectors.length; i++){
		tabSelectors[i].style.background = "#FFFFFF";
	}
}