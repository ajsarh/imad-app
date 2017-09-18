console.log('Loaded!');
//Changing the HTML
var element = document.getElementById('main-text');

//Move the Image
var img=document.getElementById('ajsar');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+01;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
    
}