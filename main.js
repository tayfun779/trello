// ID GOTUR SONRA ONA ESASEN APPEND ELE



const listItems = document.getElementsByClassName('item');
const editBtns = document.querySelectorAll(".item button");
const list1 = document.getElementById("list_1");
const list2 = document.getElementById("list_2");
const list3 = document.getElementById("list_3");

const listContent = document.querySelector("#list_1 .content");
const listContent2 = document.querySelector("#list_2 .content");
const listContent3 = document.querySelector("#list_3 .content");

const addCardBtn1 = document.querySelector(".add_card1");
const addCardBtn2 = document.querySelector(".add_card2");
const addCardBtn3 = document.querySelector(".add_card3");

let draggedItemId;



function mouseOver(id) {
    editBtns[id].style.display = "block";
}

function mouseOut(id) {
    editBtns[id].style.display = "none";
}

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("dragstart", (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
        draggedItemId = i; 
        console.log("dragStart");
    });

}

list1.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    console.log("dragOver");
});

list1.addEventListener("drop", (ev) => {
    ev.preventDefault();
    console.log("drop");
    ev.stopPropagation();

    const draggedItem = document.getElementById(ev.dataTransfer.getData("text"));

    listContent.appendChild(draggedItem);
});

list2.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    console.log("dragOver");
});

list2.addEventListener("drop", (ev) => {
    ev.preventDefault();
    console.log("drop");
    ev.stopPropagation();

    const draggedItem = document.getElementById(ev.dataTransfer.getData("text"));

    listContent2.appendChild(draggedItem);
});

list3.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    console.log("dragOver");
});

list3.addEventListener("drop", (ev) => {
    ev.preventDefault();
    console.log("drop");
    ev.stopPropagation();
    
    const draggedItem = document.getElementById(ev.dataTransfer.getData("text"));
    
    listContent3.appendChild(draggedItem);
});

var id = 0;
let new__Card = document.querySelector(".new_card");

function newCard() {
    let newCard = document.createElement("li");
    newCard.classList.add("item");
    newCard.classList.add("new_card");
    newCard.setAttribute("id", id);
    id++;
    newCard.innerHTML = `
        <input type="text" placeholder="Enter a title for this card...">
    `;
    return newCard;
};


addCardBtn1.addEventListener("click", (ev) => {
    let new_Card = newCard();
    ev.preventDefault();
    ev.stopPropagation();
    listContent.appendChild(new_Card);
    new_Card.focus();

});



addCardBtn2.addEventListener("click", (ev) => {
    const new_Card = newCard();
    ev.preventDefault();
    ev.stopPropagation();
    listContent2.appendChild(new_Card);
    new_Card.focus();
    
});


addCardBtn3.addEventListener("click", (ev) => {
    const new_Card = newCard();
    ev.preventDefault();
    ev.stopPropagation();
    listContent3.appendChild(new_Card);
    new_Card.focus();
    
});


if (new__Card !== null) {
    new__Card.addEventListener("blur", (ev) => {
        console.log("blur");
        ev.preventDefault();
        ev.stopPropagation();
        let parent = new__Card.parentNode;
        parent.removeChild(new__Card);
    });
}



// console.log(item);
// item.addEventListener("dragend", (ev) => {
    //     ev.preventDefault();
    //     console.log("dragEnd");
    // });
    
    // listContent2.appendChild(listItems[i]);
    
    
    // list1.addEventListener("dragover", (ev) => {
        //     ev.preventDefault();
        //     console.log("dragOver");
        // });
        
    // list1.addEventListener("drop", (ev) => {
    //     ev.preventDefault();
    //     console.log("drop");
    //     listContent1.appendChild(listItems[i]);
    // });
    
    
    
    
    
    
    // list3.addEventListener("dragover", (ev) => {
        //     ev.preventDefault();
    //     console.log("dragOver");
    // });
    
    // list3.addEventListener("drop", (ev) => {
        //     ev.preventDefault();
        //     console.log("drop");
        //     listContent3.appendChild(listItems[i]);
        // });
        
        // item.addEventListener("dragend", (ev) => {
            //     ev.preventDefault();
            //     console.log("dragEnd");
            // });
            
            // list2.addEventListener("dragover", (ev) => {
                //     ev.preventDefault();
                //     console.log("dragOver");
                // });
    // list2.addEventListener("drop", (ev) => {
        //     ev.preventDefault();
        //     console.log("drop");
        // });
        
        // item.addEventListener("dragend", (ev) => {
            //     ev.preventDefault();
            //     console.log("dragEnd");
    // });





// items.addEventListener("dragend", dragEnd);

// function dragStart() {
//     console.log("dragStart");
// };