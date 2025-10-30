fetch("../data/formateur.json")
  .then(response => response.json())
  .then(data => {
    const profils = data.profiles;
    profils.forEach(profil => {
      const card = document.createElement('div');
      card.classList.add('card');

      let skillsHTML = '';
      profil.skills.forEach(skill => {
        skillsHTML += `<p>${skill}</p>`;
      });

      card.innerHTML = `
        <div class="card-image">
          <img src="${profil.avatar}">
        </div>
        <div class="cercle">
            <i class="fa-solid fa-certificate"></i>
        </div>
        
        <div class="card-content">


        <div class="title">
            <h2>${profil.name}</h2>
            <h4>${profil.title}</h4>
            <p>${profil.description}</p>          
          </div>     
            <div class="card-skills">
            ${skillsHTML}
          </div>   

          <div class="stats"> 
                    <div class="students">
                        <i class="fa-solid fa-users"></i>                
                        <p id="text">${profil.students}</p>  
                        <p>Étudiants</p>          
                    </div>
                    <div class="cours">
                        <i class="fa-solid fa-book-open"></i>
                        <p id="text">${profil.courses}</p>
                        <p>Cours</p>          
                    </div>   
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <p id="text">${profil.rating}</p>
                        <p>Note</p>          
                    </div>    
                    <div class="certifs">
                        <i class="fa-solid fa-certificate"></i>
                        <p id="text">${profil.certificates}</p>
                        <p>Certifs</p>          
                    </div>           
            </div>
            <div class="btn profil">
            <button>Voir le profil</button>
          </div>

        </div>`;

      document.querySelector('.cards').appendChild(card);
    });
  })
  .catch(error => console.error('Erreur lors du chargement des profils:', error));
