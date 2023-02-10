// This file is used for creating menu for clients
import "./style.css";

class Menu {
  #menu = document.createElement("div");
  #names = [
    "Sweet Meat Pie",
    "Vegetable Meat Pie",
    "Milk Meat Pie",
    "Pepper Grilled Beef",
    "Salt Grilled Beef",
    "Sand Crawler Grilled with Salt",
    "Sand Crawler Grilled with Butter",
    "Sand Crawler Grilled with Herbs",
    "Bread and Cheese with Sugar",
    "Butter and Strawberry Combo",
  ];
  #recipes = [
    "Aged meat, Sugar, Bay leaf",
    "Aged meat, Vegetables, Bay leaf",
    "Aged meat, Milk, Bay leaf",
    "Aged meat, Pepper, Truffle",
    "Aged meat, Salt, Truffle",
    "Organic milk, Salt, Asparagus",
    "Organic milk, Butter, Asparagus",
    "Organic milk, Herbs, Asparagus",
    "Organic milk, Sugar, Glamorous mountain goat milk",
    "Organic vegetables and fruit, Butter, Truly Wild Stawberries",
  ];

  sortImages(keys) {
    let orderedKeys = [];
    for (let i = 0; i < this.#names.length; i++) {
      const key = this.#names[i];
      orderedKeys.push(`./${key.replaceAll(" ", "-")}.png`);
    }
    return orderedKeys;
  }

  importAll(r) {
    let keys = this.sortImages(r.keys());
    return keys.map(r);
  }

  #images = this.importAll(
    require.context("./assets/menu", false, /\.(png|jpe?g|svg)$/)
  );

  createMenu() {
    this.#menu.classList.add("menu");
    // this.sortImages();

    // append foods to menu dynamically
    for (let i = 0; i < this.#names.length; i++) {
      this.#menu.appendChild(
        this.createMenuItem(this.#images[i], this.#names[i], this.#recipes[i])
      );
    }
  }

  createMenuItem(icon, name, text) {
    const item = document.createElement("div");
    item.classList.add("item");

    // create menu item image
    const itemImg = document.createElement("img");
    itemImg.classList.add("itemIMg");
    itemImg.src = icon;
    itemImg.alt = name;

    // create name of food
    const foodName = document.createElement("p");
    foodName.classList.add("name");
    foodName.innerHTML = name;

    // create recipe
    const recipe = document.createElement("p");
    recipe.classList.add("itemp");
    recipe.innerHTML = text;

    // append all childs to parent and return it
    item.appendChild(itemImg);
    item.appendChild(foodName);
    item.appendChild(recipe);

    return item;
  }

  get getMenu() {
    this.createMenu();
    return this.#menu;
  }
}

const menu = new Menu();

export default menu.getMenu;
