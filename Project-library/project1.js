console.log("welocme to notes appp");
//if user add a note and adds it to local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("Notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addTxt.value);
  localStorage.setItem("Notes", JSON.stringify(notesobj));
  addTxt.value = "";
  console.log(notesobj);
  showNotes();
});
//display the notes throuh notes card/function to show from local storage
function showNotes() {
  let notes = localStorage.getItem("Notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `<div class="notesCard mx-2 my-2 card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Notes ${index + 1}</h5>
      <p class="card-text">${element}</p>
      <button id ="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
    </div>
  </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesobj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No notes added.Nothing to show`;
  }
}
//delete function
function deleteNote(index) {
  console.log("i am deleting", index);
  let notes = localStorage.getItem("Notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("Notes", JSON.stringify(notesobj));
  showNotes();
}
//search
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  let noteCard = document.getElementsByClassName("notesCard");
  Array.from(noteCard).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
