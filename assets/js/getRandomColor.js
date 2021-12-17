function getRandomColor() {
	var r = document.querySelector(':root');

	const colors = ["#9e81ef", "#ef9e81", "#81ef9e",
					"#98B8EB"];
	var length = colors.length
	var rand = Math.floor((Math.random() * length) + 0);
	r.style.setProperty('--rand', colors[rand])
	return colors[rand];
	
}

window.onload = getRandomColor;
