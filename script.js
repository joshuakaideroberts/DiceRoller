// Name: Joshua Roberts
// Description: Simulate Die Rolls

// Grab the data active attribute and toggle it
function toggleDieHold(id) {
  let currentActiveStatus = document
    .getElementById(id)
    .getAttribute("data-active");
  let newStatus = currentActiveStatus === "true" ? false : true;
  document.getElementById(id).setAttribute("data-active", newStatus);
}

// Apply the held class accordingly
if (newStatus) {
  document.getElementById(id).classList.remove("held");
} else {
  document.getElementById(id).classList.add("held");
}

// Grab all active dice 
function rollDice() {
  let allActiveDice = document.querySelectorAll('[data-active="true"]');

// Roll the dice and update src and alt
  for (let die of allActiveDice) {
    let num = Math.floor(Math.random() * 6) + 1;
    die.setAttribute("src", `images/${num}.png`);
    die.setAttribute("alt", `Die ${num}`);
  }
}
