//To getData from form and add to localstorage and frontend
function getAndAddData() {
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if (add.innerText == "Update") {
        console.log("update method of submit");
        editUpdate(tit, desc);
    } else {
        console.log("non- update method of submit");
        if (localStorage.getItem("JsonItems") == null) {
            JsonItemsArray = [];
            JsonItemsArray.push([tit, desc]);
            localStorage.setItem("JsonItems", JSON.stringify(JsonItemsArray));
        }
        else {
            if (Validate(tit, desc)) {
                JsonItemsArray.push([tit, desc]);
                localStorage.setItem("JsonItems", JSON.stringify(JsonItemsArray));
                document.getElementById("title").value = "";
                document.getElementById("description").value = "";
            }
        }
    }
    update();
}
txtarea = document.getElementById("description");
tite = document.getElementById("title");

//To validate where text and description is not empty
function Validate(title, descr) {
    if (!(title.length) == 0) {
        tite.style.borderColor = '#ced4da';
        if (!(descr.length) == 0) {
            txtarea.style.borderColor = '#ced4da';
            return true;
        }
        else {
            txtarea.style.borderColor = 'red';
            txtarea.placeholder = 'Enter Some Description';
            return false;
        }
    }
    else {
        tite.style.borderColor = 'red';
        tite.placeholder = 'Enter Some Title';
        return false;
    }
}

//TO add TODO on frontend from localstorage
function update() {
    if (localStorage.getItem("JsonItems") == null) {
        JsonItemsArray = [];
        localStorage.setItem("JsonItems", JSON.stringify(JsonItemsArray));
    }
    else {
        clearAll.style.display = 'block';
        JsonItemsArrStr = localStorage.getItem("JsonItems");
        JsonItemsArray = JSON.parse(JsonItemsArrStr);
    }
    let content = "";
    JsonItemsArray.forEach((element, index) => {
        content += `<div class="card ">
        <div class="card-body">
          <h5 class="card-title">${element[0]}</h5>
          <p class="card-text">${element[1]}</p>
            <div class="dropdown">
                <img src="three-dots-more-indicator_icon-icons.com_72518.png" width="15px" id="MoreInTodo" class="pointer img-top-side" data-bs-toggle="dropdown" aria-expanded="true">
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="MoreInTodo">
                    <li><button class="dropdown-item" type="button" onclick="MarkedAsDone(${index})">Mark as Done</button></li>
                    <li><button class="dropdown-item" type="button" onclick="editit(${index})">Edit</button></li>
                    <li><button class="dropdown-item" type="button" onclick="deleted(${index})">Delete</button></li>
                    </ul>
            </div>
        </div>
        </div>`
    });
    addTodo = document.getElementById("todos");
    todos.innerHTML = content;
    DoneUpdate();
    //Display of Clear Btn and Done TODO Label
    if (localStorage.getItem("JsonDoneItems") == "[]") {
        doneLabel.style.display = "none";
    }
    else {
        doneLabel.style.display = "block";
    }
    if (localStorage.getItem("JsonItems") == "[]" && localStorage.getItem("JsonDoneItems") == "[]") {
        clearAll.classList.add("disabled");
    }
    else {
        clearAll.classList.remove("disabled");
    }
}

//Clear All TODO i.e., clear the local storage
clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", () => {
    if (confirm("Do you really want to delete all TODOs. After doing this, you are unable to recover your TODOs?")) {
        localStorage.clear();
        update();
    }
})

//Delete TODO 
function deleted(itemIndex) {
    JsonItemsArrayStr = localStorage.getItem("JsonItems");
    JsonItemsArr = JSON.parse(JsonItemsArrStr);
    JsonItemsArr.splice(itemIndex, 1);
    localStorage.setItem("JsonItems", JSON.stringify(JsonItemsArr));
    update();
}

//To remove and update lcal storage and front end for the TODO that labeled Marked as Done
function MarkedAsDone(itemIndex) {
    JsonItemsArrayStr = localStorage.getItem("JsonItems");
    JsonItemsArr = JSON.parse(JsonItemsArrStr);
    let doneEle = JsonItemsArr.splice(itemIndex, 1);
    AddToDoneArr(doneEle[0], doneEle[1]);
    localStorage.setItem("JsonItems", JSON.stringify(JsonItemsArr));
    update();
}

//Add Done TODO to Local Storage
function AddToDoneArr(doneEletitle, doneEledesc) {
    if (localStorage.getItem("JsonDoneItems") == null) {
        JsonDoneItemsArray = [];
        JsonDoneItemsArray.push([doneEletitle, doneEledesc]);
        localStorage.setItem("JsonDoneItems", JSON.stringify(JsonDoneItemsArray));
    }
    else {
        JsonDoneItemsArray.push([doneEletitle, doneEledesc]);
        localStorage.setItem("JsonDoneItems", JSON.stringify(JsonDoneItemsArray));
    }
}

//Update Frontend (also get data from local storage) for DONE TODOs
function DoneUpdate() {
    if (localStorage.getItem("JsonDoneItems") == null) {
        JsonDoneItemsArray = [];
        localStorage.setItem("JsonDoneItems", JsonDoneItemsArray);
        localStorage.setItem("JsonDoneItems", JSON.stringify(JsonDoneItemsArray));
    }
    else {
        JsonDoneItemsArrStr = localStorage.getItem("JsonDoneItems");
        JsonDoneItemsArray = JSON.parse(JsonDoneItemsArrStr);
    }
    let DoneContent = "";
    JsonDoneItemsArray.forEach((element, index) => {
        DoneContent += `<div class="card col-sm-5 col-md-3">
            <span class="badge bg-success card-header" id="done">Done</span> 
            <div class="card-body bg-dark text-light">
            <h5 class="card-title">${element[0][0]}</h5>
            <p class="card-text">${element[0][1]}</p>
                <div class="dropdown done-dropdown">
                    <img src="three-dots-more-indicator_icon-icons.com_72518.png" width="15px" id="MoreInTodo" class="pointer img-top-side invert" data-bs-toggle="dropdown" aria-expanded="false">
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="MoreInTodo">
                        <li><button class="dropdown-item" type="button" onclick="undoneit(${index})">Mark as Undone</button></li>
                        <li><button class="dropdown-item" type="button" onclick="editit(${index})">Edit</button></li>
                        <li><button class="dropdown-item" type="button" onclick="DoneDeleted(${index})">Delete</button></li>
                    </ul>
                </div>
            </div>
        </div>`
    });
    addDoneTodo = document.getElementById("DoneTodos");
    addDoneTodo.innerHTML = DoneContent;
}

//Edit Items
let itemIndexEdit;
function editit(itemIndex) {
    labelTitle = document.getElementById("labelTitle");
    labelDesc = document.getElementById("labelDesc");
    submitBtn = document.getElementById("add");
    tit = document.getElementById("title");
    desc = document.getElementById("description");

    labelTitle.innerText = "Edit Title";
    labelDesc.innerText = "Edit Description";
    submitBtn.innerText = "Update";
    itemIndexEdit = itemIndex;

    JsonItemsArrayStr = localStorage.getItem("JsonItems");
    JsonItemsArr = JSON.parse(JsonItemsArrStr);
    let editEle = JsonItemsArr.splice(itemIndex, 1);
    console.log(editEle);
    tit.value = editEle[0][0];
    desc.innerText = editEle[0][1];

}

editUpdate = (tit, desc) => {
    console.log(tit, desc);
}

//Undone it
function undoneit(itemIndex) {
    JsonDoneItemsArrayStr = localStorage.getItem("JsonDoneItems");
    JsonDoneItemsArr = JSON.parse(JsonDoneItemsArrStr);
    ItemToUndone = JsonDoneItemsArr.splice(itemIndex, 1);
    localStorage.setItem("JsonDoneItems", JSON.stringify(JsonDoneItemsArr));
    if (localStorage.getItem("JsonItems") == null) {
        JsonItemsArray = [];
        JsonItemsArray.push([ItemToUndone[0][0][0], ItemToUndone[0][0][1]]);
        localStorage.setItem("JsonItems", JSON.stringify(JsonItemsArray));
    }
    else {
        JsonItemsArray.push([ItemToUndone[0][0][0], ItemToUndone[0][0][1]]);
        localStorage.setItem("JsonItems", JSON.stringify(JsonItemsArray));
    }
    update();
}

//Delete Done TODOs
function DoneDeleted(itemIndex) {
    JsonDoneItemsArrayStr = localStorage.getItem("JsonDoneItems");
    JsonDoneItemsArr = JSON.parse(JsonDoneItemsArrStr);
    JsonDoneItemsArr.splice(itemIndex, 1);
    localStorage.setItem("JsonDoneItems", JSON.stringify(JsonDoneItemsArr));
    update();
}
//Dark AND Light Mode
let darkLightMode = document.getElementById("dark-mode-switch");
if (darkLightMode) {
    
} else {
    
}
add = document.getElementById("add");
add.addEventListener("click", getAndAddData);
update();