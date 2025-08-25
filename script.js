// Fetching the devData.json and display cards
fetch("devData.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("cards-container");
    data.forEach(dev => {
      const card = createCard(dev);
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));

// Function to create a card
function createCard(devData) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-header">
      <div class="avatar">
        <img src="${devData.pictureUrl}" alt="${devData.id}" />
      </div>
      <h2 class="dev-name">${devData.name}</h2>
    </div>
    <div class="card-body">
      <p class="dev-bio">${devData.bio}</p>
      <div class="dev-info">
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <span>${devData.email}</span>
        </div>
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <span>${devData.phone}</span>
        </div>
      </div>
      <div class="skills">
        ${devData.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
      </div>
    </div>
    <div class="card-footer">
      <a href="#" class="social-link"><i class="fab fa-github"></i></a>
      <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
      <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
    </div>
  `;

  if (!devData.isActive) {
    card.classList.add("inactive");
  }

  return card;
}
