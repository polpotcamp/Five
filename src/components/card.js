const elementsContainer = document.querySelector('.elements');
const formElementAdd = document.querySelector('#form-add');
const inputPlace = formElementAdd.querySelector('#place-name-input')
const inputSrcPlace = formElementAdd.querySelector('#src-name-input')
const popupNewCard = document.querySelector('#newCard')

  function OpenPopupCard(PopupCard, name, src) {
    const popupImg = document.querySelector('#popup-img');
    const popupImage = document.querySelector('.popup__img');
    const popupImageName = document.querySelector('.popup__img-name');
    PopupCard.querySelector('.elements__img').addEventListener('click', function () {
      popupImage.src = `${src}`;
      popupImage.alt = `${name}`;
      popupImageName.textContent = PopupCard.querySelector('.elements__discritpion').textContent
      openPopup(popupImg);
    })
  }
  /* удалить карточку */
  function DeletCard(Card) {
    Card.querySelector('.elements__delet-icon').addEventListener('click', function () {
      Card.remove()
    })
  }
  /*лайк карточке */
  function LikeCard(Card) {
    Card.querySelector('.elements__heart').addEventListener('click', function (evt) {
      evt.target.classList.toggle('elements__heart_active');
    })
  }
  /* функция добавить карточки */
  function addCard(name, src) {
    const placeTemplate = document.querySelector('#place-template').content;
    const itemElement = placeTemplate.querySelector('#elements__item').cloneNode(true);
    itemElement.querySelector('.elements__img').src = `${src}`;
    itemElement.querySelector('.elements__img').alt = `${name}`;
    itemElement.querySelector('.elements__discritpion').textContent = name;
    /* лайк */
    LikeCard(itemElement)
    /* удалить карточку*/
    DeletCard(itemElement)
    /*открыть попап картинки */
    OpenPopupCard(itemElement, name, src)
    return itemElement;
  }
  function addItem(evt) {
    evt.preventDefault();
    const place = inputPlace.value;
    const srcPlace = inputSrcPlace.value;
    elementsContainer.prepend(addCard(place, srcPlace))
    closePopup(popupNewCard)
    evt.target.reset()
  }
/* открытие попуп */
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
/* создаю карточки */
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
function createStartCard() {
  for (let i = 0; i < initialCards.length; i++) {
    elementsContainer.prepend(addCard(initialCards[i].name, initialCards[i].link))
  }
}
export { addItem, createStartCard }