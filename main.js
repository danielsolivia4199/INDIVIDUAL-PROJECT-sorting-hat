const students = [
  {
  id: 1,
  name: "Harry Potter",
  house: "Gryffindor",
  imageUrl: "https://i.pinimg.com/564x/85/3b/77/853b77fd0ade8e3983ef8c5ec5b974d2.jpg",
  },
  {
  
  id: 2,
  
  name: "Hermione Granger",
  
  house: "Gryffindor",
  
  imageUrl: "https://i.pinimg.com/564x/ea/15/76/ea15769570a92999465e3f030b485d12.jpg",
  
  },
  
  {
  
  id: 3,
  
  name: "Ron Weasley",
  
  house: "Gryffindor",
  
  imageUrl:"https://i.pinimg.com/564x/0d/74/6e/0d746e842e929045793cb9ffb86ffc84.jpg",
  
  },
  
  {
  
  id: 4,
  
  name: "Sirius Black",
  
  house: "Gryffindor",
  
  imageUrl: "https://i.pinimg.com/564x/49/5f/7b/495f7b0244f1b9263ce936a35dfe88e2.jpg",
  
  },
  
  {
  
  id: 5,
  
  name: "Luna Lovegood",
  
  house: "Ravenclaw",
  
  imageUrl:"https://i.pinimg.com/564x/fe/19/66/fe19662c3e6b7204438d75fccba11ef6.jpg",
  
  },
  
  {
  
  id: 6,
  
  name: "Severus Snape",
  
  house: "Slytherin",
  
  imageUrl: "https://i.pinimg.com/564x/c6/6c/f6/c66cf657210b7892bfc11b0ef34951d9.jpg",
  
  },
  
  {
  
  id: 7,
  
  name: "Draco Malfoy",
  
  house: "Slytherin",
  
  imageUrl: "https://i.pinimg.com/564x/b0/39/23/b0392379c1d2701dea865924c4d950e1.jpg",
  
  },
  
  {
  
  id: 8,
  
  name: "Bellatrix Lestrange",
  
  house: "Slytherin",
  
  imageUrl: "https://i.pinimg.com/originals/8b/64/89/8b64898804552888380c0b8893a2693b.png",
  
  },
  
  {
  
  id: 9,
  
  name: "Alastor Moody",
  
  house: "Hufflepuff",
  
  imageUrl: "https://i.pinimg.com/564x/ed/66/2c/ed662c95a88d55359d0ec6da61636ca0.jpg",
  
  },

  {

  id: 10,
  
  name: "Dementhor",
  
  house: "Voldemort's Army",
  
  imageUrl: "https://i.pinimg.com/564x/16/d9/70/16d9706f4c1301be0c496dec7791e33e.jpg",
  
  },

  {

    id: 11,
    
    name: "Death Eater",
    
    house: "Voldemort's Army",
    
    imageUrl: "https://i.pinimg.com/564x/18/bc/61/18bc61a4041dc3f8b917f634f6f080cd.jpg",
    
  },
  
  ];
  
    
  
  const renderToDom = (divId, htmlToRender) => {
  
  const selectedDiv = document.querySelector(divId);
  
  selectedDiv.innerHTML = htmlToRender;
  
  };
  
  const cardsOnDom = (array) => {
  
  let domString = "";
  
  for (const student of array) {
  
  domString +=
  
  `<div class="card" style="width: 12rem;">
  
  <img src=${student.imageUrl} class="card-img-top" alt=${student.name}>
  
  <div class="card-body>
  
  <h5 class="card-title">${student.name}</h5>
  
  <p>House: ${student.house}</p>
  
  <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
  
  </div>
  
  </div>`; }
  
  renderToDom("#app", domString);
  
    
  
  }
  
  cardsOnDom(students);
  
  const filter = (array, houseString) => {
  
  const houseArray = [];
  
  for (const student of array) {
  
  if (student.house === houseString) {
  
  houseArray.push(student);
  
  }
  
  }
  
  return houseArray;
  
  }
  
    
  
  const showAllButton = document.querySelector("#a-btn");
  
  const showGryffindorButton = document.querySelector("#g-btn");
  
  const showRavenclawButton = document.querySelector("#r-btn");
  
  const showHufflepuffButton = document.querySelector("#h-btn");
  
  const showSlytherinButton = document.querySelector("#s-btn");

  const showVoldemortButton = document.querySelector("#v-btn");
  
    
  
  showAllButton.addEventListener('click', () => {
  
  cardsOnDom(students)
  
  });
  
  showGryffindorButton.addEventListener('click', () => {
  
  const gryffindorHouse = filter(students, 'Gryffindor');
  
  cardsOnDom(gryffindorHouse);
  
  });
  
  showRavenclawButton.addEventListener('click', () => {
  
  const ravenclawHouse = filter(students, 'Ravenclaw');
  
  cardsOnDom(ravenclawHouse);
  
  });
  
  showHufflepuffButton.addEventListener('click', () => {
  
  const hufflepuffHouse = filter(students, 'Hufflepuff');
  
  cardsOnDom(hufflepuffHouse);
  
  });
  
  showSlytherinButton.addEventListener('click', () => {
  
  const slytherinHouse = filter(students, 'Slytherin');
  
  cardsOnDom(slytherinHouse);
  
  });

  showVoldemortButton.addEventListener('click', () => {
    const voldemortHouse = filter(students, "Voldemort's Army");
    cardsOnDom(voldemortHouse);
  })
  
    
  
  //select and target the form on the DOM
  
    
  
  const form = document.querySelector('form');
  
    
  
  //function that grabs all the values from the form and pushes the info
  
  const createStudent = (e) => {
  e.preventDefault();
  const newStudentObj = {
  id: students.length + 1,
  name: document.querySelector('#name').value
  }
  
  
  students.push(newStudentObj);
  cardsOnDom(students);
  form.reset();
  }
  
  //add event listener for the form submit and pass it the function
  form.addEventListener('submit', createStudent);
  const app = document.querySelector('#app');
    
  app.addEventListener('click', (e) => {
  if (e.target.id.includes("delete")) {
  const [,id] = e.target.id.split("--");
  const index = students.findIndex(e => e.id === Number(id));
  students.splice(index,1);
  cardsOnDom(students);
  }
  });


  
    
  
  const startApp = () => {
  cardsOnDom(students);
  }

  startApp();
