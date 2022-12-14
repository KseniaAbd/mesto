const editProfile = document.querySelector(".profile__edit-button_about");
const popupOpened = document.querySelector(".popup_about");
const popupClose = document.querySelector(".popup__close-button_about");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_userName");
let jobInput = document.querySelector(".popup__input_userJob");
let userName = document.querySelector(".profile__name");
let userJob = document.querySelector(".profile__text");

function openPopup() {
  popupOpened.classList.add("popup_opened");
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
}

function closePopup() {
  popupOpened.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup();
}

editProfile.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);
