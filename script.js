const myName = "Firstyan"
const myHobby = "learning web dev"
let myAge = 20

console.log(myName)
console.log(myAge)
console.log(myHobby)

myAge = 21  // change the value
console.log(myAge) // should print 21 now

const myButton = document.getElementById("myButton")
console.log(myButton) // you should see the button printed in console!
myButton.addEventListener("click", function() {
  console.log("button was clicked!")
})
const myText = document.getElementById("myText")

myButton.addEventListener("click", function() {
  myText.textContent = "You clicked the button! 🎉"
})

const surprise = document.getElementById("surprise")
surprise.addEventListener("click", function () {
    alert("CRITTT CROTTT MASZEHHH")
})

const magicText = document.getElementById("magicText")
const nameBtn = document.getElementById("nameBtn")
const nameInput = document.getElementById("nameInput")

nameBtn.addEventListener("click", function() {
  const typedName = nameInput.value
  magicText.textContent = "Hello " + typedName + "!"
})

const miButton = document.getElementById("miButton")
miButton.addEventListener("click", function() {
  magicText.textContent = "Clicked!"
  magicText.style.color = "red"
  magicText.style.fontSize = "32px"
  alert("Also showing a popup!")
})

const clickBtn = document.getElementById("clickBtn")
const clickText = document.getElementById("clickText")
let clickCount = 0

clickBtn.addEventListener("click", function() {
  clickCount = clickCount + 1
  console.log(clickCount)

  if (clickCount == 1) {
    clickText.textContent = "You clicked once!"
  } else if (clickCount == 2) {
    clickText.textContent = "Twice now!"
  } else if (clickCount == 3) {
    clickText.textContent = "THREE TIMES WOW!"
  } else {
    clickText.textContent = "okay stop clicking 😂"
  }
})

const passwordInput = document.getElementById("passwordInput")
const checkBtn = document.getElementById("checkBtn")
const resultText = document.getElementById("resultText")

checkBtn.addEventListener("click", function() {
  const typed = passwordInput.value

  if (typed == "firstyan123") {
    resultText.style.display = "block"
    resultText.textContent = "✅ Correct password!"
    resultText.style.color = "green"
  } else {
    resultText.style.display = "block"
    resultText.textContent = "❌ Wrong password!"
    resultText.style.color = "red"
  }
})

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const calcResult = document.getElementById("calcResult")

function calculate(operation) {
  const a = Number(num1.value) // Number() converts text to a number
  const b = Number(num2.value)

  console.log(operation)

  if (operation == "add") {
    calcResult.textContent = "Result: " + (a + b)
  } else if (operation == "subtract") {
    calcResult.textContent = "Result: " + (a-b)
  } else if (operation == "multiply") {
    calcResult.textContent = "Result: " + (a * b)
  } else if (operation == "division") {
    calcResult.textContent = "Result: " + (a/b)
  }
}

document.getElementById("addBtn").addEventListener("click", function() {
  calculate("add")
})

document.getElementById("subtractBtn").addEventListener("click", function() {
  calculate("subtract")
})

document.getElementById("multiplyBtn").addEventListener("click", function() {
  calculate("multiply")
})

document.getElementById("divisionBtn").addEventListener("click", function() {
  calculate("division")
})

let hobbies = ["eat", "eat", "sex"];

for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}

hobbies.push("sleeping");     // adds to the end
console.log(hobbies);         // ["eat", "eat", "sex", "sleeping"]

hobbies.pop();                // removes the last item
console.log(hobbies);         // ["eat", "eat", "sex"]

console.log(hobbies.length);  // 3

let person = {
  name: "Dandely",
  age: 21,
  city: "Lampung",
  hobby: "sex"
}

console.log (person.name);
console.log (person.hobby)


let friends = [
  { name: "Budi", age: 20, city: "Jakarta", skills: ["HTML", "CSS"] },
  { name: "Siti", age: 22, city: "Bandung", skills: ["JavaScript", "React"] },
  { name: "Andi", age: 21, city: "Surabaya", skills: ["Python", "SQL"] }
];

for (let i = 0; i < friends.length; i++) {
  let friend = friends[i];

  let skillList = "";
  for (let j = 0; j < friend.skills.length; j++) {
    skillList += `<span class="card">${friend.skills[j]}</span>`;
  }

  friendCards.innerHTML += `
    <div class="card">
      <h3>${friend.name}</h3>
      <p>Age: ${friend.age}</p>
      <p>City: ${friend.city}</p>
      <p>Skills: ${skillList}</p>
    </div>
  `;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const userCards = document.getElementById("userCards");

  users.forEach((user) => {
    userCards.innerHTML += `
      <div class="card">
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
      </div>
    `;
  });
}

loadUsers();

async function loadPLMatches() {
  const response = await fetch("https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id=4328");
  const data = await response.json();
  const matches = data.events;

  const matchCards = document.getElementById("matchCards");

  matches.forEach((match) => {
    matchCards.innerHTML += `
      <div class="card">
        <p style="font-size: 12px; color: gray;">${match.strLeague} — ${match.dateEvent}</p>
        <div style="display: flex; align-items: center; gap: 10px; margin: 10px 0;">
          <img src="${match.strHomeTeamBadge}" style="width: 40px;">
          <strong>${match.strHomeTeam}</strong>
          <span>vs</span>
          <strong>${match.strAwayTeam}</strong>
          <img src="${match.strAwayTeamBadge}" style="width: 40px;">
        </div>
        <p style="font-size: 13px;">⏰ ${match.strTime} | 🏟️ ${match.strVenue}</p>
      </div>
    `;
  });
}

loadPLMatches();