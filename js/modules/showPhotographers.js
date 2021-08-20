import { getJsonData } from "./getJsonData.js";
import { getPhotographers } from "./getPhotographers.js";
import data from "../FishEyeData.js";
import { photographerPage } from "./photographerPage.js";

let json;
let user;

const showPhotographers = () => {
  
  getPhotographers().then((data) => {
    const html = data
      .map((user) => {
        
        
        const str = user.name;
        const dash = str.replace(" ", "-");
        return `
            <div class="user " id=${user.id}>
                <a href="?${dash}">
                <div class="circle thumb">
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


      photographerPage();
      
      
  });
};

export { showPhotographers };
