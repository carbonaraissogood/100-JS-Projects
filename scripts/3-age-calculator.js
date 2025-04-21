const calculateButtonElement = document.querySelector('.js-calculate-button');

let age = 0;

calculateButtonElement.addEventListener('click', () => {
  const currentDate = new Date();
  const birthdateInput = document.querySelector('.js-birthdate-input').value;
  const birthdate = new Date(birthdateInput);

  console.log(currentDate);
  console.log(birthdate);

  age = currentDate.getFullYear() - birthdate.getFullYear();

  if (currentDate.getMonth() >= birthdate.getMonth() && currentDate.getDate() >= birthdate.getDate()) {
    age += currentDate.getMonth() - birthdate.getMonth()
  } else {
    age--;
  }

  console.log(age);

  const indicatorElement = document.querySelector('.js-indicator').innerHTML = `Your age is ${age} years old`;

});