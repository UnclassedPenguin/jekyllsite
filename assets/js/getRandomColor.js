function getRandomColor() {
	var r = document.querySelector(':root');

	const colors = ["#81EF9E",
			"#9E81EF",
			"#EF9E81",
			"#EF81D2",
			"#D581EF",
			"#81EFD5",
			"#81D2EF",
			"#CB98EB",
			"#98B8EB"];
	var length = colors.length
	var rand = Math.floor((Math.random() * length) + 0);
	r.style.setProperty('--rand', colors[rand])
	return colors[rand];
	
}

getRandomColor();
