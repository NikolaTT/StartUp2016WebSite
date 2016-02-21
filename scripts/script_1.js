//used to store the current tab so that it's easy to reference the current tab
var currentTab = "";
var initialTabSelector = "";
var tabContentClass = "tab-content";

//colors used at multiple places
//better to just have color scheme somehwere as vars
var selectedTabBackgroundColor = "#FFA600";
var selectedTabTextColor = "#000000";

var unselectedTabBackgroundColor = "#EcEcEc";
var unselectedTabTextColor = "#757575";


//window.onload = function () {

var tabContents = document.getElementsByClassName(tabContentClass);
for (var j = 0; j < tabContents.length; j++) {
    tabContents[j].style.visibility = "hidden";
}

currentTab = "conference";
initialTabSelector = "conference-tab-selector";

document.getElementById(initialTabSelector).style.backgroundColor = selectedTabBackgroundColor;
document.getElementById(initialTabSelector).style.color = selectedTabTextColor;

document.getElementById(currentTab).style.display = "flex";
document.getElementById(currentTab).style.visibility = "visible";


window.onload = function () {
    
    for (var j = 0; j < tabContents.length; j++) {
        tabContents[j].style.visibility = "visible";
        tabContents[j].style.display = "none";
    }
    
    document.getElementById(currentTab).style.display = "flex";
    document.getElementById(currentTab).style.visibility = "visible";

    
    //we take all the tab selectors (like Conference, Weekend, etc.)
    var tabSelectors = document.getElementsByClassName('tab-selectors');

    //and then we iterate over them, setting their onclick behavior
    //first we make the current tab hidden
    //and then we make the desired tab visible
    for (var i = 0; i < tabSelectors.length; i++) {
        tabSelectors[i].onclick = function () {
            clearTabSelectorsBGColor();
            this.style.backgroundColor = selectedTabBackgroundColor;
            this.style.color = selectedTabTextColor;
            document.getElementById(currentTab).style.display = "none";
            var tabToView = this.getAttribute("href");
            tabToView = tabToView.substring(1);
            document.getElementById(tabToView).style.display = "flex";
            document.getElementById(tabToView).style.visibility = "visible";
            currentTab = tabToView;

            var drawer = document.getElementsByClassName('mdl-layout__drawer')[0];
            var obfuscator = document.getElementsByClassName('mdl-layout__obfuscator')[0];

            if (drawer.classList.contains("is-visible") && obfuscator.classList.contains("is-visible")) {
                drawer.classList.toggle("is-visible");
                obfuscator.classList.toggle("is-visible");
            }

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

var clearTabSelectorsBGColor = function () {
    var tabSelectors = document.getElementsByClassName('tab-selectors');


    for (var i = 0; i < tabSelectors.length; i++) {
        tabSelectors[i].style.backgroundColor = unselectedTabBackgroundColor;
        tabSelectors[i].style.color = unselectedTabTextColor;
    }
}