function openTab(evt, cityName) {
    var i, x, tablinks;
x = document.getElementsByClassName("tab-container");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
}
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}

function expandPanel(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("show-content") == -1) {
        x.className += " show-content";
    } else { 
        x.className = x.className.replace(" show-content", "");
    }
}