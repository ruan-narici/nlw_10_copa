function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/logo_${player1}.svg" alt="${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/logo_${player2}.svg" alt="${player2}" />
  </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card1" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
  </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo da Copa [NLW]" />
  </header>

  <main id="cards">
    ${createCard("24/11", "quinta", 
      createGame("brasil", "16:00", "servia"))}
    ${createCard("28/11", "segunda", 
      createGame("brasil", "13:00", "suica") +
      createGame("camaroes", "07:00", "servia"))}
    ${createCard("02/12", "sexta", 
      createGame("brasil", "16:00", "camaroes"))}
  </main>
`
