testimonyList = [
  {
    image: 'babybaby.png',
    quote: 'I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.',
    name: 'Rosetta Q'
  }, {
    image: 'Catsss.jpg',
    quote: 'Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.',
    name: 'Constantine V'
  }
];

let testimonyHTML = ``;

let counter = 0;

function updateTestimony() {
  const container = document.querySelector('.js-card-container');

  container.classList.add('fade-out');

  setTimeout(() => {
    testimonyHTML = `
    <div class="card">
      <img class="image" src="images/${testimonyList[counter].image}">
  
      <p class="quote">${testimonyList[counter].quote}</p>
  
      <p class="name">${testimonyList[counter].name}</p>
    </div>`;
  
    counter = (counter + 1) % testimonyList.length;
  
    container.innerHTML = testimonyHTML;
  
    container.classList.remove('fade-out');
    container.classList.add('fade-in');
  }, 1000);
};

console.log(testimonyList[counter].quote);

setInterval(updateTestimony, 3000);

updateTestimony();