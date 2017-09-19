console.log('Loaded!');
//Changing the HTML
var element = document.getElementById('main-text');
//Counter code
var button=doucment.getElementById('counter')
button.onClick = function(){
    //Make a request to the counter
    var request=new XMLHttpRequest();
    //Store in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementId('count');
                span.innerHTML=counter.toString();
            }
        }
    }
    request.open=('GET','http://ajsarhisan.imad.hasura-app.io/counter',true);
    request.send=(null);
}
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