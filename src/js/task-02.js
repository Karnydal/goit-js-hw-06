const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listToAddItems = document.querySelector(`#ingredients`);

const addListItems = (array) => {
  const listArray = array.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.classList.add("item");
    return listItem;
  });
  listToAddItems.append(...listArray);
};

addListItems(ingredients);

// let ulList = document.getElementById(ingredients);
// const foodIngredients = ingredients.forEach((ingredient) => {
//   let items = document.createElement("li");
//   items.innerHTML = ingredient;
//   ulList.append(...items);
// });

// console.log(foodIngredients);
