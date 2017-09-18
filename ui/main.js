console.log('Loaded!');
//Changing the HTML
var element = document.getElementById('main-text');
element.innerHTML='new Value'; 
//Move the Image
var img=document.getElementById('ajsar');
img.onclick=function(){
    img.style.marginLeft='100px';
}