// home.js

function newHPElement(title, color, url) {
	var elem = document.createElement("div");
	elem.className = "item";
	elem.style.backgroundColor = color;
	elem.setAttribute("href", url);
	elem.onclick = function() {
		window.location = url;
	};
	elem.innerHTML = title;
	return elem;
};

window.onload = function() {
	var centerbox = document.getElementById("centerbox");
	for (var i=0; i<homepage.length; i++) {
		var elem = newHPElement(homepage[i][0], homepage[i][1],
					homepage[i][2]);
		if (homepage[i].length == 4
		&& typeof homepage[i][3] == "object") {
			for (var name in homepage[i][3])
				elem.setAttribute(name, homepage[i][3][name]);
		}
		centerbox.appendChild(elem);
	}
};
