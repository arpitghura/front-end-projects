let addBtn = document.getElementById("add");
let notesContainer = document.getElementById("notesContainer");

const updateLSData = () =>{
    let textAreaCollection = document.querySelectorAll("textarea");
    let notes = [];
    textAreaCollection.forEach((note)=>{
        return notes.push(note.value);
    })
    localStorage.setItem("notes",JSON.stringify(notes));
}
const addNewNote = (text = '') =>{
    const note = document.createElement('div');
    note.classList.add('note');
    let htmlData = `
    <div class="operation">
    <button class="btn btn-sm card-btn" id="editBtn"><i class="fa fa-edit"></i></button>
    <button class="btn btn-sm card-btn" id="deleteBtn"><i class="fa fa-trash"></i></button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"> </div>
    <textarea class="textEdit ${text ? 'hidden' : ''}"></textarea>`
    note.insertAdjacentHTML("afterbegin",htmlData);
    
    let editBtn = note.querySelector("#editBtn");
    let deleteBtn = note.querySelector("#deleteBtn");
    let mainBox = note.querySelector(".main");
    let textArea = note.querySelector(".textEdit");
    
    textArea.value = text;
    mainBox.innerText = text;
    const changeIcon = () =>{
        if(mainBox.classList.contains("hidden")){
            editBtn.children[0].classList.remove("fa-edit");
            editBtn.children[0].classList.add("fa-check");
        }
        else if(textArea.classList.contains("hidden")){
            editBtn.children[0].classList.remove("fa-check");
            editBtn.children[0].classList.add("fa-edit");
        }
    }
    changeIcon();
    editBtn.addEventListener("click", () =>{
        mainBox.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
        textArea.focus();

        changeIcon();
    })

    textArea.addEventListener("change",(event)=>{
        let value = event.target.value;
        mainBox.innerText = value;

        updateLSData();
    })

    const deleteNote = () =>{
        note.remove();
        updateLSData();
    }
    deleteBtn.addEventListener("click",deleteNote);
    notesContainer.append(note);
}
if(localStorage.getItem("notes")){
    const notes = JSON.parse(localStorage.getItem("notes"));
    notes.forEach((note)=>{
        addNewNote(note);
    })
}

addBtn.addEventListener("click", () => addNewNote() );