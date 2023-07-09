function allModal() {
    const btnEdit = document.querySelector('.profile__edit-button');
    const popupProfile = document.querySelector('#editProfile');
    const closeIcons = document.querySelectorAll('.popup__close-icon')
    const popupNewCard = document.querySelector('#newCard')
    const btnNew = document.querySelector('.profile__add-button')
    const formElementProf = document.querySelector('#form-profile');
    const avtorName = formElementProf.querySelector('#name-input');
    const avtorDiscription = formElementProf.querySelector('#description-input');
    const profileName = document.querySelector('.profile__name')
    const profileDiscription = document.querySelector('.profile__description')
    const overlay = document.querySelectorAll('.popup__overlay')
    /* открытие и закрытие формы*/
    btnNew.addEventListener('click', function () {
        openPopup(popupNewCard);
    });
    btnEdit.addEventListener('click', function () {
        avtorName.value = profileName.textContent;
        avtorDiscription.value = profileDiscription.textContent;
        openPopup(popupProfile);
    });
    closeIcons.forEach(function (btn) {
        const popup = btn.closest(('.popup'))
        btn.addEventListener('click', () => closePopup(popup));
    })
    /* кнопка сохранить меняет имя жака кусто */

    function handleFormSubmit(evt) {
        evt.preventDefault();
        profileName.textContent = avtorName.value;
        profileDiscription.textContent = avtorDiscription.value;
        closePopup(popupProfile)
    }
    formElementProf.addEventListener('submit', handleFormSubmit);
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
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        const popup = document.querySelector('.popup_opened')
        if (key === "Escape" && popup) {
            closePopup(popup)
        }
    });
}
export { allModal }