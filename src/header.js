import "./style.css";

class Header {
  #header = document.createElement("div");
  #btns = [];

  createHeader() {
    this.#header.classList.add("header");

    // create logo text
    const logo = document.createElement("h1");
    logo.innerHTML = "Boar Hat";
    // TODO: create class for it and change font-family

    // Create button group for managing app
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("buttons");
    btnGroup.appendChild(this.generateButtons("Home"));
    btnGroup.appendChild(this.generateButtons("Menu"));
    btnGroup.appendChild(this.generateButtons("Contact"));

    // append child elements
    this.#header.appendChild(logo);
    this.#header.appendChild(btnGroup);
  }

  generateButtons(text) {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = text;

    this.#btns.push(btn);

    return btn;
  }

  get getHeader() {
    this.createHeader();
    return { header: this.#header, btns: this.#btns };
  }
}

const header = new Header();

export default header.getHeader;
