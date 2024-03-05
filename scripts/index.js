const container = document.querySelector(".page__content");
const cardListContainer = container.querySelector(".places__list"); //куда вставляем карточки

// Функция создания карточки

function createCard(cardContent, deleteFunction) {
  const templateCard = document.querySelector("#card-template").content;
  const itemCard = templateCard.querySelector(".places__item").cloneNode(true);

  itemCard.querySelector(".card__image").src = cardContent.link;
  itemCard.querySelector(".card__title").textContent = cardContent.name;

  const deleteButton = itemCard.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteFunction);

  return itemCard;
}

// Функция удаления карточки

function deleteCard(evt) {
  evt.target.closest(".places__item").remove();
}

// Выводит карточки на страницу

initialCards.forEach(function (itemCard) {
  const card = createCard(itemCard, deleteCard);
  cardListContainer.append(card);
});
