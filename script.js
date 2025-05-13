let Add = document.querySelector("#add")
let remove = document.querySelector("#remove")
let task = document.querySelector("#task")
let ul = document.querySelector("ul")

var listAdd;

Add.addEventListener("click",function(){
    if(task.value.trim()===''){}
    else{
        listAdd = document.createElement("li");
        listAdd.textContent = task.value;
        ul.appendChild(listAdd);
        task.value="";

    }
})

remove.addEventListener("click",function(){
    ul.removeChild(listAdd);
})