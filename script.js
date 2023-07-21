const textbox = document.getElementById("textbox");
const toDoBox = document.getElementById("to-do-box");

textbox.addEventListener("keyup", (event) => {
    if(event.key == "Enter"){
      addToDo(textbox.value);
        textbox.value = "";
    }

})

const addToDo = (value) => {
    const listItem  = document.createElement("li");
    listItem.innerHTML = `
    ${value}
    <i class="fas fa-times"></i>
    `;
    listItem.addEventListener("click",()=>{
        listItem.classList.toggle("done");
    })
    listItem.querySelector("i").addEventListener("click",()=>{
        listItem.remove();
    });
    toDoBox.appendChild(listItem);
}


