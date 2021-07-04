//Liste de tous les photographes avec leur nom, leur slogan, leur localisation,
//leur prix/heure, leurs tags et une image miniature de leur choix.
const fetchData = () => {
  
  //fetch API all the photographers
  fetch("db/FishEyeData.json")
    .then((res) => {
      if (!res.ok) {
        let error;
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

export default fetchData;