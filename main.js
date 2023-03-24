//Start adding profile-pic modal to the base program
let modal = document.getElementById("prof-pic-modal");
let profilePic = document.getElementById("profile-pic");
let profPicModalCloseBtn = document.getElementById("prof-pic-modal-close-btn");

profilePic.addEventListener("click", openModal);
profPicModalCloseBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

//Uncommenting the folowwing function will allow to close the modal by clicking
//anywhere outside the modal-picture.
/*
function outsideClick(windowElement){
if(windowElement.target == modal){
    modal.style.display = "none";
}
}
*/

//End adding profile-pic modal to the base program
