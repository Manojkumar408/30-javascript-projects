const notescontainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");

function createNote(content = "") {
    let noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.style.position = "relative";

    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.innerText = content;

    let img = document.createElement("img");
    img.src = "/NotesApp/images/delete.png";
    img.className = "delete-icon";

    img.addEventListener("click", () => {
        noteDiv.remove();
        updateStorage();
    });

    inputBox.addEventListener("keyup", () => {
        updateStorage();
    });

    noteDiv.appendChild(inputBox);
    noteDiv.appendChild(img);
    notescontainer.appendChild(noteDiv);
}

createBtn.addEventListener("click", () => {
    createNote();
    updateStorage();
});

function updateStorage() {
    const allNotes = document.querySelectorAll(".input-box");
    let data = [];
    allNotes.forEach(note => data.push(note.innerText));
    localStorage.setItem("notes", JSON.stringify(data));
}

function showStorage() {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(noteText => createNote(noteText));
}

showStorage();
