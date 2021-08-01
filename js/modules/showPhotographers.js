import {  getJsonData } from "./getJsonData.js";
let json;

// share scope json
if(1 == 1) {
  json = getJsonData();
}

// console.log(json);
const showPhotographers = () => {
  // get the values
  if (json !== undefined) {
    // load the images

    // function html Photographers section
    
    console.log(json);
    const html = JSON.stringify(json)
      .photographers?.map((user) => {
        const str = user.name;
        const dash = str.replace(" ", "-");
        console.log(dash);
        return `        
        <div class="user ">
            <a href="#${dash}">
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
  }
}



export { showPhotographers };