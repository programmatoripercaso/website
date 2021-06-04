var stylesheets = [
    {foglio_stile: "stile_ppc.css", logo: "Logo_Red_neg.png", logoFooter: "Logo_Red_neg_ext.png"},
    {foglio_stile: "turchese/stile_ppc.css", logo: "turchese/Logo_Green_neg.png", logoFooter: "turchese/Logo_Green_neg_ext.png"},
]

function changeStyleSheet(){
	old_n = localStorage.getItem("stile_selezionato");
	if (old_n == null) {
		old_n = 0;
	}
	console.log('old_n: ', old_n)
	do {
		n = Math.floor(Math.random() * stylesheets.length);    
		console.log('n: ', n)
	} while(n == old_n);
	localStorage.setItem("stile_selezionato", n);
	actuallyChangeStylesheet(n);
}

window.onload = quandoSiCaricaLaPagina();

function quandoSiCaricaLaPagina() {
	current_n = localStorage.getItem("stile_selezionato");
	if (current_n == null) {
		current_n = 0;
		localStorage.setItem("stile_selezionato", current_n);
	}
	actuallyChangeStylesheet(current_n);
}

function actuallyChangeStylesheet(n) {
	var stylesheet = document.getElementById("stylesheet");    
	let urlo_stylesheet = "static/" + stylesheets[n].foglio_stile;
	stylesheet.setAttribute('href', urlo_stylesheet);

	var logo = document.getElementById("logo")
	var urlo_logo = "static/" + stylesheets[n].logo;
	logo.setAttribute('src', urlo_logo);

	var logoFooter = document.getElementById("logo-footer")
	var urlo_logoFooter = "static/" + stylesheets[n].logoFooter;
	logoFooter.setAttribute('src', urlo_logoFooter);
}