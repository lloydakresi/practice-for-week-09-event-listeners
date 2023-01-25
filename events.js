// Your code here

const redBack =  e => {
    let text = e.target.value;
    if (text === "red"){
        e.target.parentElement.style.backgroundColor = "red";
    }else{
        e.target.parentElement.style.backgroundColor = "transparent";
    }
}


const listUpdate =  e =>{
    let list = document.querySelector("ul");
    let data = document.getElementById("list-add").value;
    let listItem = document.createElement("li");
    listItem.innerText = data;
    list.append(listItem);
}


let colorSection = document.getElementById("section-3");
const colorFunc = e =>{
    let color = e.target.value;
    colorSection.style.backgroundColor = color;
}


window.addEventListener("DOMContentLoaded", e =>{
    console.log("DOM loaded successfully bro!");


    //add an event that checks if the input is red and if so, turns the background red
    let redInput = document.getElementById("red-input");
    redInput.addEventListener("input", redBack)

    let addButton = document.getElementById("add-item");
    addButton.addEventListener("click", listUpdate);

    let colorSelector = document.getElementById("color-select");
    colorSelector.addEventListener("input", colorFunc )

    let removeListeners = document.getElementById("remove-listeners");
    removeListeners.addEventListener("click", e => {
        redInput.removeEventListener("input", redBack);
        addButton.removeEventListener("click", listUpdate);
        colorSelector.removeEventListener("input", colorFunc);
    })
})
