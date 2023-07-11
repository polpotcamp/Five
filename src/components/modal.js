
const overlay = document.querySelectorAll('.popup__overlay')
/* открытие и закрытие  popup */
function openPopup(popup) {
    popup.classList.add("popup_opened");
}
function closePopup(popup) {
    popup.classList.remove("popup_opened");
}
/* закрытие попап при нажатии на overlay */

overlay.forEach(function (btn) {
    const popup = btn.closest(('.popup'))
    btn.addEventListener('click', () => closePopup(popup));
})
/* закрытие на Esc */
function closeByEsc(evt) {
    if (evt.key === `Escape`) {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup); 
    }
}  
document.addEventListener('keydown', closeByEsc)
export { closePopup, openPopup }