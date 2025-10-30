fetch("../data/cours.json")
  .then(response => response.json())
  .then(data => {
    const cours = data.cours;
    cours.forEach(cour => {
      const card = document.createElement('div');
      card.classList.add('card');

      let badgesHTML = '';
      cour.badges.forEach(badge => {
        badgesHTML += `<p class="card-badge">${badge}</p>`;
      });

      card.innerHTML = `
        <div class="card-image">
          <img src="${cour.image}" alt="${cour.titre}">
        </div>
        <div class="card-content">
            <div class="card-badges">
            ${badgesHTML}
          </div>
          <div class="title">
            <h2>${cour.titre}</h2>
            <p>${cour.description}</p>          
          </div>

          <div class="star_duree">
            <div class="duree_nombre"> 
                    <div class="dure">
                        <i class="fa-regular fa-clock"></i>
                        <p>${cour.duree}</p>            
                    </div>
                    <div class="nombre">
                        <i class="fa-solid fa-users"></i>                
                        <p>${cour.nombre_etudiants}</p>
                    </div>          
            </div>

            <div class="star">
                <i class="fa-solid fa-star"></i>
                <p>${cour.note}</p>          
            </div>

          </div>
          
          <div class="price_btn">
            <p>${cour.prix}</p>
            <button>Voir le cours</button>
          </div>
        </div>`;

      document.querySelector('.cards').appendChild(card);
    });
  })
  .catch(error => console.error('Erreur lors du chargement des cours:', error));
