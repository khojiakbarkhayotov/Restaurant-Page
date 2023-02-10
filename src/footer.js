import "./style.css";
import github from "./assets/github-white.svg";

class Footer {
  #footer = document.createElement("div");

  constructor() {
    this.createFooter();
    return this.#footer;
  }

  createFooter() {
    this.#footer.classList.add("footer");

    // Generate text
    const text = document.createElement("pre");
    text.classList.add("footp");
    text.innerHTML = `Copyright &copy; 2023 khojiakbar `;

    // create link to GitHub
    const link = document.createElement("a");
    link.href = "https://github.com/khojiakbarkhayotov";

    const gitImg = document.createElement("img");
    gitImg.src = github;
    gitImg.classList.add("git");
    gitImg.alt = "git";

    link.appendChild(gitImg);

    this.#footer.appendChild(text);
    this.#footer.appendChild(link);
  }
}

export default new Footer();
