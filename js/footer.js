
import { contacts } from "../utils/contact.js";
console.log(contacts);

const footer = () => {
    //queryselector para seleccionar la clase
    const footerNavLinkDist = document.querySelector('.footer-nav__link-list');
    const footerNavCredits = document.querySelector('.footer-nav__credits');

    contacts.filter(element => element.main).forEach((element) => {
        footerNavLinkDist.innerHTML += ` 
        <li class="footer-nav__link-item">
            <a href="${element.urlContact}" class="footer-nav__link">
            <img src="${element.urlImage}" alt="${element.name}" class="footer-nav__link-image" />
            </a>
        </li>`;
    });

    footerNavCredits.innerHTML = `
    😎Copyright &copy; ${new Date().getFullYear()} <a href="#"
                class="footer-nav__credits-author" target="_blank" rel="noreferrer">Peter Arce.</a> Todos los derechos
              reservados.😎`
}

export default footer;
