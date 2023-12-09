const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    (event)=>{
        if(event.key == "Enter"){
            addToDo(item.value);
            item.value="";
        }
    })

const addToDo = (item)=>{
    const listItem =document.createElement("li")
    listItem.innerHTML=`
    ${item}
    <i class="fa-solid fa-xmark"></i>
    `;

    listItem.addEventListener("click",()=>{listItem.classList.toggle("done");})

    listItem.querySelector("i").addEventListener("click",()=>{listItem.remove()})

    toDoBox.appendChild(listItem)
}