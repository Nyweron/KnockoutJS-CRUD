//ADD USER
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  resetAllValues("myModal");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalStyleDisplay(modal);
  resetAllValues("myModal");
};

//EDIT USER
var modalEdit = document.getElementById("myModalEdit");
var btnEdit = document.getElementById("myBtnEdit");
var spanEdit = document.getElementsByClassName("closeEdit")[0];
btnEdit.onclick = function() {
  modalEdit.style.display = "block";
};
spanEdit.onclick = function() {
  console.log("Xfg");
  modalStyleDisplay(modalEdit);
  resetAllValues("myModalEdit");
};

//DETAILS USER
var modalDetails = document.getElementById("myModalDetails");
var btnDetails = document.getElementById("myBtnDetails");
var spanDetails = document.getElementsByClassName("closeDetails")[0];
btnDetails.onclick = function() {
  modalDetails.style.display = "block";
};
spanDetails.onclick = function() {
  modalStyleDisplay(modalDetails);
};

function modalStyleDisplay(mod) {
  mod.style.display = "none";
}

function resetAllValues(idName) {
  $("#" + idName)
    .find("input:text")
    .val("");
}
