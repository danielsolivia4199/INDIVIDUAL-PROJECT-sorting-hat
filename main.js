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

  /*{
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
  */
  
];

//above code: array of students objects. Each student has a unique id, name, house, and image  
    
  
const renderToDom = (divId, htmlToRender) => {
  //defines function called 'renderToDom' that takes two parameters: 'divId' and 'htmlToRender'
const selectedDiv = document.querySelector(divId);
  //selects the HTML element with the ID passed as 'divId' argument using the 'querySelector' method of the document object, and assigns it to a variable called 'selectedDiv'
selectedDiv.innerHTML = htmlToRender;
  // sets the 'innerHTML' property of the 'selectedDiv' element to the 'htmlToRender' argument passed to the 'renderToDom function. This replaces any existing HTML content in the selected element with the new content
};

function filter(array, value) {
  return array.filter(item => item.house === value);
}

const showAllButton = document.querySelector("#a-btn"); //selects the HTML element with the ID "a-btn" and assigns it to the showAllButton variable using the querySelector method of the document object. The document object reps the webpage in the browser. querySelector method allows you to select HTML elements in the web page useing a css selector # the selector is looking for an element with a specific id
const showGryffindorButton = document.querySelector("#g-btn");
  
const showRavenclawButton = document.querySelector("#r-btn");
  
const showHufflepuffButton = document.querySelector("#h-btn");
  
const showSlytherinButton = document.querySelector("#s-btn");

    
showAllButton.addEventListener('click', () => { //adds an event listener to the showAllButton element, which triggers a call back function when the button is clicked
  cardsOnDom(students); //calls the cardsOnDom function with the students array as its argument, which renders all the student cards on the page
  });
  
showGryffindorButton.addEventListener('click', () => {
  const gryffindorHouse = filter(students, 'Gryffindor');
  //creates a new array called gryffindorHouse by calling the filter function with the students array and the string 'Gryffindor' as its arguments; filter function returns a new array that contains only the students in the Gryffindor house 
  cardsOnDom(gryffindorHouse); //calls the cardsOnDom function with the gryffindor house array as it's argument, which renders only the student cards for Gryffindor students on the page
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

  
    
  
//select and target the form on the DOM
const form = document.querySelector('form');


  
    
  
//function that grabs all the values from the form and pushes the info
  
//define new function called createStudent
const createStudent = (e) => {
  e.preventDefault(); //prevents the browser from performing the default form submission behavior when the function is called, the function can handle the form data within the JS code
  const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']; //array of 4 house names
  const houseIndex = Math.floor(Math.random() * 4); //generates random integer between indexes 0 and 3
  const newStudentObj = { // creates new object with 3 properties
    id: students.length + 1, //adds 1 to create unique id
    imageUrl: "https://i.pinimg.com/564x/2d/e9/60/2de96055ce6c2a0404a3aa19ad1ac0d2.jpg",
    name: `Hmm, difficult. VERY difficult, ${document.querySelector('#name').value}`, //sets name propery to the value of the input field with id 'name'
    house: houses[houseIndex] //sets house property to a random house name from the house array
  }
  
  students.push(newStudentObj); //adds new student object to array
  cardsOnDom(students); //renders updated list of students on DOM
  form.reset(); // resets form to default values
};


form.addEventListener('submit', createStudent); //adds event listener to the form element that listens for the 'submit' event and calls the createStudent function when the event is triggered
const app = document.querySelector('#app'); //selects the HTML element with the id app and assigns it to the app variable using the querySelector method of the document object

/*
expel btn deletes student

app.addEventListener('click', (e) => {
  if (e.target.id.includes("delete")) {
  const [,id] = e.target.id.split("--");
  const index = students.findIndex(e => e.id === Number(id));
  students.splice(index,1);
  cardsOnDom(students);
  }
});

*/

const expelledStudents = [];

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
    </div>`;
  }
  
  renderToDom("#app", domString);
  
  const deleteButtons = document.querySelectorAll(".btn-danger");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const studentId = parseInt(e.target.id.split("--")[1]);
      const index = students.findIndex((student) => student.id === studentId);
      const expelledStudent = students.splice(index, 1)[0];
      expelledStudents.push(expelledStudent);
      renderExpelledToDom(expelledStudents);
      cardsOnDom(students);
    });
  });
};





const renderExpelledToDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString +=
    `<div class="card" style="width: 12rem;" id="expelledcards">
      <img src=${student.imageUrl} class="card-img-top" alt=${student.name}>
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
      </div>
    </div>`;
  }
  
  renderToDom("#expelled-students", domString);
};

// add these two objects to the expelledStudents array
expelledStudents.push({
  id: 10,
  name: "Dementhor",
  imageUrl: "https://i.pinimg.com/564x/16/d9/70/16d9706f4c1301be0c496dec7791e33e.jpg",
});

expelledStudents.push({
  id: 11,
  name: "Death Eater",
  imageUrl: "https://i.pinimg.com/564x/18/bc/61/18bc61a4041dc3f8b917f634f6f080cd.jpg",
});

expelledStudents.push({
  id: 12,
  name: "Lord Voldemort",
  imageUrl: "https://i.pinimg.com/564x/4f/d6/89/4fd689c6f0dd164d52b4e76f9f639897.jpg",
});





const startApp = () => {
cardsOnDom(students);
};

startApp();
