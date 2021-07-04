import Photographer from "./Factory.js";
import fetchData from "./fetchData.js";

const templateUser = (data) => {
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
};

export default templateUser;
