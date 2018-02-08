// get all cars from le_wagon garage
const createCard = (car) => {
  const carsList = document.querySelector('.cars-list');
  const brand = car.brand;
  const model = car.model;
  const owner = car.owner;
  const card = `<div class="car">
    <div class="car-image">
      <img src="images/white_logo_black_square.png" alt=""/>
    </div>
    <div class="car-info">
      <h4>${brand} - ${model}</h4>
      <p><strong>Owner:</strong> ${owner}</p>
    </div>
  </div>`;
  carsList.insertAdjacentHTML('beforeend', card);
};

fetch('https://wagon-garage-api.herokuapp.com/le_wagon/cars')
.then(respons => respons.json())
.then((data) => {
  data.forEach(createCard);
});

// get info from form
//
const button = document.querySelector('.btn-cta');
button.addEventListener('click', (event) => {
  const inputs = document.querySelectorAll('.form-control');
  const data = {
    brand: inputs[0].value,
    model: inputs[1].value,
    owner: inputs[2].value
  }
  const url = 'https://wagon-garage-api.herokuapp.com/le_wagon/cars'
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then((data) => {
    createCard(data);
    document.querySelectorAll('.form-control').forEach(input => input.value = '');
  });
});

