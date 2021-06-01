var stylesheets = [
    {foglio_stile: "stile_ppc.css", logo: "Logo_Red_neg.png", logoFooter: "Logo_Red_neg_ext.png"},
    {foglio_stile: "turchese/stile_ppc.css", logo: "turchese/Logo_Green_neg.png", logoFooter: "turchese/Logo_Green_neg_ext.png"},
]

function changeStyleSheet(){    
       var n = Math.floor(Math.random() * stylesheets.length);    
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