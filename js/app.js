document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded');

  const list = document.querySelector('.animal-list'); //select list

  const handleSubmitForm = function (event) {
    event.preventDefault();
    const newDiv = createNewDiv(event.target);
    list.appendChild(newDiv); //add div to list
    form.reset();
  }

  const handleDeleteList = function (event) {
    list.textContent = ' ';
  }

  const createNewDiv = function (form) {
    const newDiv = document.createElement('div');
    newDiv.className = 'list-item';

    const species = document.createElement('p');
    species.textContent = `Species: ${form.species.value}`;
    newDiv.appendChild(species);

    const diet = document.createElement('p');
    diet.textContent = `Diet: ${form.diet.value}`;
    newDiv.appendChild(diet);

    const continent = document.createElement('p');
    continent.textContent = `Continent: ${form.continent.value}`;
    newDiv.appendChild(continent);

    return newDiv;
  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleSubmitForm);

  const deleteList = document.querySelector('#delete-button');
  deleteList.addEventListener('click', handleDeleteList);

});
