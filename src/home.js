// This module is responsible for home page of website
import "./style.css";
import chef from "./assets/chef.webp";

class Home {
  #home = document.createElement("div");

  createHome() {
    // create home img
    const homeImg = document.createElement("img");
    homeImg.classList.add("homeImg");
    homeImg.src = chef;
    homeImg.alt = "chef";

    // append home elements to parent
    this.#home.classList.add("home");
    this.#home.appendChild(this.createParagraph("Best food in your country"));
    this.#home.appendChild(
      this.createParagraph("Made with passion since 2014")
    );
    this.#home.appendChild(homeImg);
    this.#home.appendChild(this.createParagraph("Order online or visit us!"));
  }

  createParagraph(text) {
    const para = document.createElement("p");
    para.classList.add("homep");
    para.innerHTML = text;
    return para;
  }

  get getHome() {
    this.createHome();
    return this.#home;
  }
}

const home = new Home();

export default home.getHome;
