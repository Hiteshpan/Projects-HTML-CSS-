let circle = document.querySelector('#circle');

window.addEventListener("mousemove",function(details){

    let xvalue = details.pageX - 38;
    let yvalue = details.pageY - 39;

    this.setTimeout(function(){
        circle.style.top = yvalue + 'px';
        circle.style.left = xvalue + 'px';
    },90)

})
