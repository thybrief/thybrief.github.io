
function change() {

  var x = document.getElementById('partner');

  x.style.width="100%";
  x.style.height="100%";
  x.style.top="30px";
  x.style.position="fixed";
  x.style.padding="15% 0 0 0";
  x.style.margin="20px 0 0 0";
  x.style.display="block";
  x.style.left="0px";
  x.style.fontSize="40px";
  x.style.index="100";
  x.style.background="rgba(255,355,255,0.9)";
  x.onclick=function(){change1()};

  var y=document.getElementById("foot");
  y.style.display="none";


};

function change1() {
var x = document.getElementById('partner');

      x.style.height="auto"
      x.style.position="relative";
      x.style.padding="0px 0px 0px 0px";
      x.style.top="0px";
      x.style.textAlign="center"
      x.style.display="block";
      x.style.left="none";
      x.style.fontSize="16px";
      x.style.index="auto";
      x.style.background="rgba(255,355,255,1)";
      x.onclick=function(){change()};
      var y=document.getElementById("foot");
      y.style.display="block";
};

function mustread(){
  var x=document.getElementById('mustread');
  x.style.display="block";
  x.style.position="fixed";
  x.style.width="100%";
  x.style.height="100%";
  x.style.zIndex="100";
  x.style.background="rgba(255,255,255,0.7)";
  x.onclick=function(){mustunread()};
  var y=document.getElementById("foot");
    y.style.display="none";

}
function mustunread(){
  var x=document.getElementById('mustread');
  x.style.display="none";

  x.style.position="fixed";
  x.style.width="100%";
  x.style.height="auto";
  x.style.zIndex="100000";
  x.style.background="rgba(255,255,255,0.7)";
  x.onclick=function(){unabout()};
  var y=document.getElementById("foot");
    y.style.display="block";

}

function about(){
  var x=document.getElementById('about');
  x.style.display="block";
  x.style.position="fixed";
  x.style.width="100%";
  x.style.height="100%";
  x.style.zIndex="100";
  x.style.top="0px";
  x.style.padding="18% 0 0 0";
  x.style.left="0px";
  x.style.background="rgba(255,255,255,0.9)";
  x.onclick=function(){unabout()};

  var y=document.getElementById("foot");
    y.style.display="none";

}

function unabout(){
  var x=document.getElementById('about');
  x.style.display="none";
  x.style.position="relative";
  x.style.width="100%";
  x.style.height="auto";
  x.style.zIndex="100000";
  x.style.background="rgba(255,255,255,0.7)";
  x.onclick=function(){about()};

  var y=document.getElementById("foot");
    y.style.display="block";

}
