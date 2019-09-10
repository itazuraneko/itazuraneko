
function set_bookmark() {
	localStorage.setItem('bm_' + location.pathname, window.scrollY);
	load_bookmark();
}

function load_bookmark() {
	pos = localStorage.getItem('bm_' + location.pathname);
	if( ! pos) {
		return;
	}
	
	var div = document.getElementById('bookmark');
	if( ! div) {
		var div = document.createElement('div');
		document.body.appendChild(div);
	}
	div.id = 'bookmark';
	div.style.top = pos + 'px';
	div.style.display = 'block';
	div.addEventListener('click', remove_bookmark);
	div.scrollIntoView();
}

function remove_bookmark() {
	var div = document.getElementById('bookmark');
	div.style.display = 'none';
	localStorage.removeItem('bm_' + location.pathname);
}

document.onkeypress = function(e) { // doesn't have to be "e"
	if(e.which == 98) {
		set_bookmark();
	}
};


onload = load_bookmark;