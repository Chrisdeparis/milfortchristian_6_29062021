//Liste de tous les photographes avec leur nom, leur slogan, leur localisation,
//leur prix/heure, leurs tags et une image miniature de leur choix.
const fetchData = () => {
  //fetch API all the photographers
  fetch("db/FishEyeData.json")
    .then((res) => {
      if (!res.ok) {
        throw error("Error");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data.photographers);
      const html = data.photographers
        .map((user) => {
          return `        
            <div class="user ">
                
                <div class="circle thumb">
                    <div class="crop">
                    <img src="img/${user.portrait}" alt="" />
                    </div>
                    <h2 class="name">${user.name}</h2>
                </div>
               
                <p class="city">${user.city}</p>
                <p class="tagline">${user.tagline}</p>
                <p class="price">${user.price} €/jour</p>
                <ul class="tags">
                    ${user.tags
                      .map((tag) =>
                        `
                    <li>
                        <a href="#" class="${tag}">#${tag}</a>
                    </li>
                `.trim()
                      )
                      .join("")}
                </ul>
            </div>
            `;
        })
        .join("");

      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    });
};


fetchData();

// En cliquant sur une étiquette (tag) dans la barre de navigation, la liste des
// photographes est filtrée pour n'afficher que ceux qui correspondent à cette
// étiquette.

const filterTag = () => {
  const btns = document.querySelectorAll(".btn");
  
  let i;
  for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
      

      const listUsers = document.querySelectorAll(".user");
      const tags = document.querySelector(".tags");
      const filter = e.target.dataset.filter;
      const tagName = document.getElementsByClassName(filter);
      e.preventDefault();
      console.log(filter);
      console.log(listUsers);
      listUsers.forEach((user) => {
        console.log(user);
        if (filter === "all") {
          console.log("filter === all");
          user.style.display = "block";
          console.log(user);
        } else {
          console.log(filter);
          console.log(tagName);
          user.style.display = "none";
          if (tagName) {
            console.log("filter click = "+filter);
            let j;
            for(  j=0; j<tagName.length; j++) {
              console.log(tagName[j].parentElement.parentElement.parentElement);
              tagName[j].parentElement.parentElement.parentElement.style.display = "block";
            }  
          }
        }
      });
    });
  }
};

filterTag();

// Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa
// page.



const photographerPageShow = () => {
  const thumbnails = document.querySelectorAll('.circle.thumb');
 
  let k;
  console.log(thumbnails);
  
  
}

photographerPageShow();
