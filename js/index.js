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
                <a href="#">
                <div class="circle">
                    <div class="crop">
                    <img src="img/${user.portrait}" alt="" />
                    </div>
                    <h2 class="name">${user.name}</h2>
                </div>
                </a>
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
  const btn = document.querySelector(".btn");

  function tagClass() {
    for (i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", (e) => {
        const listUsers = document.querySelectorAll(".user");
        const tags = document.querySelector(".tags");
        const tagPortrait = document.getElementsByClassName("portrait");
        e.preventDefault();
  
        const filter = e.target.dataset.filter;
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
            console.log(tagPortrait);
            if (tagPortrait.getAttribute('class') === 'portrait') {
              console.log("filter click");
              user.style.display = "block";
            } else {
              console.log("else");
              user.style.display = "none";
            }
          }
        });
        // console.log(user);
      });
    }

  }
  tagClass();
  
  const userName = document.querySelectorAll(".circle h2.name");

  btn.addEventListener("onclick", filterUsers);

  function filterUsers(e) {
    const text = e.target.value.toLowerCase();
    console.log(userName[0]);
    userName.forEach(function (user) {
      const item = user.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        user.parentElement.parentElement.style.display = "block";
      } else {
        user.parentElement.parentElement.style.display = "none";
      }
    });
  }
};

filterTag();
