var stylesheets = [
    "stile_ppc.css",
    "turchese/stile_ppc.css",
]

function changeStyleSheet(){
    console.log(stylesheets)
    
       var n = Math.floor(Math.random() * stylesheets.length);
    console.log(n)
    
       var stylesheet = document.getElementById("stylesheet");
    console.log(stylesheets.length)
    
       let urlo = "static/" + stylesheets[n];
    
    console.log("url: ", urlo)
    
       stylesheet.setAttribute('href', urlo);
    }