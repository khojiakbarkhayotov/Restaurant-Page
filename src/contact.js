// This file is used to creatte contact page of application
import "./style.css";
import phone from "./assets/phone.svg";
import location from "./assets/boar-hat.png";
import mapBritania from "./assets/britania.webp";

class Contact {
  #contact = document.createElement("div");

  createContact() {
    // create map img
    const map = document.createElement("img");
    map.src = mapBritania;
    map.alt = "Britania map";
    map.classList.add("britania");

    // append elements to parent element
    this.#contact.classList.add("contact");
    this.#contact.appendChild(this.createParagraph("+998946385930", phone));
    this.#contact.appendChild(
      this.createParagraph(
        "Britania, Kingdom of Liones, Melodias street 106",
        location
      )
    );
    this.#contact.appendChild(map);
  }

  createParagraph(text, icon) {
    const para = document.createElement("div");
    para.classList.add("contactp");

    // create icon
    const imgIcon = document.createElement("img");
    imgIcon.src = icon;
    imgIcon.alt = "info";

    // create actual paragraph
    const paragraph = document.createElement("p");
    paragraph.innerHTML = text;

    para.appendChild(imgIcon);
    para.appendChild(paragraph);
    return para;
  }

  get getContact() {
    this.createContact();
    return this.#contact;
  }
}

const contact = new Contact();

export default contact.getContact;
