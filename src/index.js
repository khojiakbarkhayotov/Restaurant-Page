"use strict";

// this file is for general website

// import _ from "lodash";
import "./style.css";
import home from "./home.js";
import contact from "./contact.js";
import menu from "./menu.js";
import header from "./header.js";
import footer from "./footer.js";

function component() {
  const container = document.createElement("container");
  container.classList.add("container");

  container.appendChild(header.header);

  // create Main content container for holding home, menu and contact
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  const buttons = header.btns;

  buttons[0].classList.add("active");
  mainContent.appendChild(home);

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.add("active");
      buttons.forEach((item) => {
        if (this !== item) {
          item.classList.remove("active");
        }
      });
      const text = btn.textContent.toLowerCase();
      if (text === "home") {
        mainContent.innerHTML = "";
        mainContent.appendChild(home);
      } else if (text === "menu") {
        mainContent.innerHTML = "";
        mainContent.appendChild(menu);
      } else {
        mainContent.innerHTML = "";
        mainContent.appendChild(contact);
      }
    });
  });

  container.appendChild(mainContent);

  container.appendChild(footer);
  return container;
}

document.body.appendChild(component());
