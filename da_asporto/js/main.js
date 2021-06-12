var pics=document.getElementById("pics");
var n=1;

setInterval(function(){
 //   alert(n)
 //   n++;
if(n>18) n=1
 pics.innerHTML="<img src='./img/"+n+".jpg'>";
 n++;
}, 2000);