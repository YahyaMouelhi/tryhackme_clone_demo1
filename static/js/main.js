let heads = document.querySelectorAll(".accordion-head");
let body = document.querySelectorAll(".accordion-body");
for (let i = 0;i<heads.length;i++){
    heads[i].addEventListener("click",function(){
        if (body[i].classList.contains("hidden")){
            body[i].classList.remove("hidden");
            heads[i].classList.add("open")
        }else{
            body[i].classList.add("hidden");
            heads[i].classList.remove("open")
        }
    })
}