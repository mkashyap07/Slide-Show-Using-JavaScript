const images=['https://images.unsplash.com/photo-1642299272714-fa6988ef80ed?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1564471925181-982d3a6c1a3f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1611999347610-2e7bdf95d95f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1641464835774-431b7934037b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1608326793735-42a6d15751f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']


var preImg=document.getElementById("pre");
var nextImg=document.getElementById("next");
var slide=document.getElementById("slide");
var currIndex=0;
preImg.addEventListener("click",()=>{
    if(currIndex==0)
        {
            currIndex=images.length-1;
        }
        else{
    currIndex--;
    slide.src=images[currIndex];
        }
})
nextImg.addEventListener("click",()=>{
    if(currIndex==images.length-1)
        {
            currIndex=0;
        }
        else{
    currIndex++;
    slide.src=images[currIndex];
        }
        
})
