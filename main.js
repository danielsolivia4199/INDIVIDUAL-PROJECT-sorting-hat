const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
    imageUrl: "https://www.clipartmax.com/png/middle/10-100195_harry-potter-harry-potter-pixel-art.png",
  },
  {
    id: 2,
    name: "Hermione Granger",
    house: "Gryffindor",
    imageUrl: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/ce72b3c4a556226.png",
  },
  {
    id: 3,
    name: "Ron Weasley",
    house: "Gryffindor",
    imageUrl:"https://www.pngkit.com/png/detail/312-3129481_ron-weasley-ron-weasley-pixel-art.png",
  },
  {
    id: 4,
    name: "Sirius Black",
    house: "Gryffindor",
    imageUrl: "https://i.etsystatic.com/27715683/r/il/f28a0c/2977357683/il_fullxfull.2977357683_6sxq.jpg",
  },
  {
    id: 5,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4LLZuwAYiGhW_HwUGRnwFAOSm31bEvPdzRQ&usqp=CAU",
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
    imageUrl: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/328d60e13cd6412.png",
  },
  {
    id: 8,
    name: "Bellatrix Lestrange",
    house: "Slytherin",
    imageUrl: "https://i.pinimg.com/originals/8b/64/89/8b64898804552888380c0b8893a2693b.png",
  },
  {
    id: 9,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    imageUrl: "https://apps.joltteam.com/cdn/brikbuild/cedric-diggory-pixel-art-8bit-cedric-diggory-hogwarts-hufflepuff-pixel-pixel-art-wizard-5a24f9aff6c96a8d2972060e.brickImg.jpg",
  }
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

//select and target the form on the DOM
const form = document.querySelector('form');
//function that grabs all the values from the form and pushes the info
const createStudent = (e) => {
  e.preventDefault();

  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector('#name').value,
    house: document.querySelector('#house').value
  }

  students.push(newStudentObj);
  cardsOnDom(students);
  form.reset();
} 
//add event listener for the form submit and pass it the function
form.addEventListener('submit', createStudent);

const app = document.querySelector('#app');

app.addEventListener('click', (e) => {
  if (e.target.id.includes("Expel")) {
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
