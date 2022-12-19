const _html=document.querySelector("._html");
const asd=document.querySelectorAll(".asd");
const my_skills=document.querySelector(".my_skiils");
 


function slide_image(){
    console.log(asd);
    for(var i=0;i<5;i++){
        asd[i].style.display="block";
    }
}
my_skills.addEventListener("click",slide_image);



//_html.addEventListener("mouseover",slide_image);
