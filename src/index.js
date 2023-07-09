import './index.css'
import { enableValidation } from './components/validate.js'
import { addItem,createStartCard } from './components/card';
import { allModal } from './components/modal';
allModal()
enableValidation()
createStartCard()
const formElementAdd = document.querySelector('#form-add');
formElementAdd.addEventListener('submit', addItem);
