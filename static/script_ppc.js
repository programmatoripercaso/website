var stylesheets = [
    {
    	foglio_stile: "stile_ppc.css", 
    	logo: "Logo_Red_neg.png", 
    	logoFooter: "Logo_Red_neg_ext.png"
    },
    {
    	foglio_stile: "template_stile_alternativo/stile_alternativo.css", 
    	logo: "template_stile_alternativo/Logo_Green_neg.png", 
    	logoFooter: "template_stile_alternativo/Logo_Green_neg_ext.png"
    },
    // aggiungere qui sopra dopo la virgola la configurazione del nuovo stile
]

function changeStyleSheet(){
	old_n = localStorage.getItem("stile_selezionato");
	if (old_n == null) {
		old_n = 0;
	}
	do {
		n = Math.floor(Math.random() * stylesheets.length);    
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
	console.log('stile cambiato in ', n)
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