function subscribeon() {
var x = document.getElementById("demo")
  x.style.display="block";

var y=document.getElementById("foot");
  y.style.display="none";
var z=document.getElementById("form1");
  z.style.display="block";
 }

function subscribeoff() {
 var x = document.getElementById("demo");
  x.style.display="none";

 x = document.getElementById("foot");
  x.style.display="block";

 x = document.getElementById("form1");
  x.style.display="none";

 }


 function overlyon() {
   var x = document.getElementById("image")
     x.style.opacity=0.4;

   var y=document.getElementById("Yourstory");
     y.style.display="block";
     


 }
 function overlyoff() {
   var x = document.getElementById("image")
     x.style.opacity=1;

   var y=document.getElementById("Yourstory");
     y.style.display="none";



 }
