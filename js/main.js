//Access new-item button. 
var itemButton;
var i; 

itemButton = document.querySelector("button");

//Access unordered list.
var groceryList = document.getElementById("groceryList");

//Declare variable list-item.
var listItem;





function removeItem(ev){
    var caughtElement;
    caughtElement = ev.target;
    
    for (i = 0; i < listItem.length; i += 1) {
        listItem[i].removeAttribute("class");
    }
    caughtElement.setAttribute("class", "new"); 
}




function addItem() {
    listItem = document.createElement("li");
    listItem.innerHTML = prompt("Enter a new item for to-do list:");
    if (listItem !== null) {  
        groceryList.appendChild(listItem);
        listItem.addEventListener("click", removeItem, false);
    }
}






itemButton.addEventListener("click", addItem, false);
