import { getPhotographers } from './getPhotographers.js'
import  { getJsonData } from './getJsonData.js'
import data from '../FishEyeData.js';
let showfiltered;


const filterNav = () => {
  
  // On click nav
  document.getElementById("nav").onclick = (event) => {
    console.log("clic nav");
    if (event.target !== event.currentTarget) {
      const tagName = event.target.dataset.filter;
      
      //Do stuff with json here
      let jsonData = data;
      
      let photographers =  data.photographers;

      function selectTag(photographer) {
        console.log(photographer);
        console.log(event.target.dataset.filter);
        return photographer.tags.includes(event.target.dataset.filter);
      }
      let jsonfilter = photographers.filter(selectTag);
      console.log(jsonfilter);
      
      const showfiltered = () => {  
        getPhotographers().then((jsonfilter) => {
          const html = jsonfilter
            .map((user) => {
              const str = user.name;
              const dash = str.replace(" ", "-");
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
        });
      }
      console.log(showFiltered);
    }
  }
};

export { filterNav };