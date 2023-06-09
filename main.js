const students = [
  {
  id: 1,
  name: "Harry Potter",
  house: "Gryffindor",
  imageUrl: "https://i.pinimg.com/564x/85/3b/77/853b77fd0ade8e3983ef8c5ec5b974d2.jpg",
  description: "Come Join Us!"
  },

  {
  id: 2,
  name: "Hermione Granger",
  house: "Gryffindor",
  imageUrl: "https://i.pinimg.com/564x/ea/15/76/ea15769570a92999465e3f030b485d12.jpg",
  description: "Come Join Us!"
  },
  
  {
  id: 3,
  name: "Ron Weasley",
  house: "Gryffindor",
  imageUrl:"https://i.pinimg.com/564x/0d/74/6e/0d746e842e929045793cb9ffb86ffc84.jpg",
  description: "Come Join Us!"
  },
  
  {
  id: 4,
  name: "Sirius Black",
  house: "Gryffindor",
  imageUrl: "https://i.pinimg.com/564x/49/5f/7b/495f7b0244f1b9263ce936a35dfe88e2.jpg",
  description: "Come Join Us!"
  },
  
  {
  id: 5,
  name: "Luna Lovegood",
  house: "Ravenclaw",
  imageUrl:"https://i.pinimg.com/564x/fe/19/66/fe19662c3e6b7204438d75fccba11ef6.jpg",
  description: "Come Join Us!"
  },
  
  {
  id: 6,
  name: "Severus Snape",
  house: "Slytherin",
  imageUrl: "https://i.pinimg.com/564x/c6/6c/f6/c66cf657210b7892bfc11b0ef34951d9.jpg",
  description: "Come Join Us!"
  },
  
  {
  id: 7,
  name: "Draco Malfoy",
  house: "Slytherin",
  imageUrl: "https://i.pinimg.com/564x/b0/39/23/b0392379c1d2701dea865924c4d950e1.jpg",
  description: "Come Join Us!"
  },
  
  {
  id: 8,
  name: "Bellatrix Lestrange",
  house: "Slytherin",
  imageUrl: "https://i.pinimg.com/originals/8b/64/89/8b64898804552888380c0b8893a2693b.png",
  description: "Come Join Us!"
  },
  
  {
  id: 9,
  name: "Alastor Moody",
  house: "Hufflepuff",
  imageUrl: "https://i.pinimg.com/564x/ed/66/2c/ed662c95a88d55359d0ec6da61636ca0.jpg",
  description: "Come Join Us!"
  }, 
];

//above code: array of students objects. Each student has a unique id, name, house, and image  
    
  
const renderToDom = (divId, htmlToRender) => {
  //defines function called 'renderToDom' that takes two parameters: 'divId' and 'htmlToRender'
const selectedDiv = document.querySelector(divId);
  //selects the HTML element with the ID passed as 'divId' argument using the 'querySelector' method of the document object, and assigns it to a variable called 'selectedDiv'
selectedDiv.innerHTML = htmlToRender;
  // sets the 'innerHTML' property of the 'selectedDiv' element to the 'htmlToRender' argument passed to the 'renderToDom function. This replaces any existing HTML content in the selected element with the new content
};

const showAllButton = document.querySelector("#a-btn"); //selects the HTML element with the ID "a-btn" and assigns it to the showAllButton variable using the querySelector method of the document object. The document object reps the webpage in the browser. querySelector method allows you to select HTML elements in the web page useing a css selector # the selector is looking for an element with a specific id
const showGryffindorButton = document.querySelector("#g-btn");
  
const showRavenclawButton = document.querySelector("#r-btn");
  
const showHufflepuffButton = document.querySelector("#h-btn");
  
const showSlytherinButton = document.querySelector("#s-btn");

//this function takes an array and a value as arguments.
//Function filters through an array of objects (students) based on the property (house) value. It then returns a new array that only conains the objects with the mathching propery value.
function filter(array, value) {
  //The array.filter() method creates a new array with all elements that pass the test implemeted by the provided funtion. The provided function is taking an item from the array and checking if its house property is equal to the provided value. If the house matches the value, the item is inclueded in the new array returned by the filter() method
  return array.filter(item => item.house === value);
};
    
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
    name: `Hmm, difficult. VERY difficult, ${document.querySelector('#name').value}. `, //sets name propery to the value of the input field with id 'name'
    house: houses[houseIndex], //sets house property to a random house name from the house array
    description: 'How could you betray us?'
  }

//define variable houseString and set it to an empty string
let houseString = '';
//use a switch statement to check the value of newStudentObj.house
  switch (newStudentObj.house) {
    //if newStudentObj.house is = to 'Gryffindor', set houseString to 'You have the heart of a lion!'
    case 'Gryffindor':
      houseString = 'You have the heart of a lion!';
      break;
    case 'Slytherin':
      houseString = 'Cunning and ambitious!';
      break;
    case 'Hufflepuff':
      houseString = 'Loyal and patient!';
      break;
    case 'Ravenclaw':
      houseString = 'Wit beyond measure is man\'s greatest treasure!';
      break;
      //If newStudentObj.house is not = to any cases above, set houseString to an empty string
    default:
      houseString = '';
      break;
  }

  //adds the value of houseString to the end of newStudentObj.name
  newStudentObj.name += houseString;

  students.unshift(newStudentObj); //adds new student object to beginning of array with .unshift
  cardsOnDom(students); //renders updated list of students on DOM
  form.reset(); // resets form to default values
};



form.addEventListener('submit', createStudent); //adds event listener to the form element that listens for the 'submit' event and calls the createStudent function when the event is triggered
const app = document.querySelector('#app'); //selects the HTML element with the id app and assigns it to the app variable using the querySelector method of the document object



const cardsOnDom = (array) => { // function named cardsOnDom, which takes an arry as input and renders cards for each student
  let domString = ""; //  empty string to
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
  
  //calls the function renderToDom and passes two arguments to it. First #app, the CSS selector of the element on the HTML page where we want to render the dynamically created content. Second, domString which is a string containing the HTML content to render on the DOM
  renderToDom("#app", domString);

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
  
const deleteButtons = document.querySelectorAll(".btn-danger");
//selects all delete buttons on page
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // adds a click event listener to each delete button
      const studentId = parseInt(e.target.id.split("--")[1]);
      //changes student id from true,1 to false,0
      const index = students.findIndex((student) => student.id === studentId);
      //fins the index of the student object in the students array with the matching id
      const expelledStudent = students.splice(index, 1)[0];
      //removes the student object from the students array and stores it in a variable
      expelledStudents.push(expelledStudent);
      //adds the expelled student object to the expelledStudents array
      renderExpelledToDom(expelledStudents);
      //updates the DOM to display the list of expelled students
      cardsOnDom(students);
      //updates the DOM to display the list of remaining students
    });
  });
};
//loops through all the delete buttons and adds an event listener to each one that removes the corresponding student object from the student array and adds it to the expelledStudents array, then updates the DOM to display the updated lists of students and expelled students

const expelledStudents = []; //empty array to hold expelled students


expelledStudents.push({
  id: 10,
  name: "Dementor",
  imageUrl: "https://i.pinimg.com/564x/16/d9/70/16d9706f4c1301be0c496dec7791e33e.jpg",
  description: "..."
});

expelledStudents.push({
  id: 11,
  name: "Death Eater",
  imageUrl: "https://i.pinimg.com/564x/18/bc/61/18bc61a4041dc3f8b917f634f6f080cd.jpg",
  description: "The Dark Lord Shall Rise Again!"
});

expelledStudents.push({
  id: 12,
  name: "Lord Voldemort",
  imageUrl: "https://i.pinimg.com/564x/4f/d6/89/4fd689c6f0dd164d52b4e76f9f639897.jpg",
  description: "Join Me! Expel students to grow my army!"
});

//iterates over student objexts in the array parameter
const renderExpelledToDom = (array) => {
  //HTML added to each student object for the cards to the domString variable
  let domString = "";
  for (const student of array) {
    domString +=
    `<div class="card" style="width: 12rem;" id="expelledcards">
      <img src=${student.imageUrl} class="card-img-top" alt=${student.name}>
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <h5 class="card-title">${student.description}</h5>
      </div>
    </div>`;
  }
  //renders the completed domString to the DOM by calling the renderToDom function
  renderToDom("#expelled-students", domString);
};
//calls renderExpelledToDom and passes expelledStudents as an argument which displays the expeeled students on the DOM 
renderExpelledToDom(expelledStudents);

//defines function startApp that calls cardsOnDom function and passes student array as an argument. Calling the cardsOnDom function generates the HTML code
const startApp = () => {
cardsOnDom(students);
};
//causes the function to run and render the student cards on the DOM
startApp();
