const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("modal-active");
  overlay.classList.add("overlay-active");
};
//Modal close function
const closeModal = () => {
  modal.classList.remove("modal-active");
  overlay.classList.remove("overlay-active");
};
