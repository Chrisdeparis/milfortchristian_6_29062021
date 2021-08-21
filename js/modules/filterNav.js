import { getPhotographers } from './getPhotographers.js';
import  { getJsonData } from './getJsonData.js';
import data from "../FishEyeData.js";
import { router } from './router.js'

router();
let showFiltered;
const filterNav = () => {
  
  // On click nav
  document.getElementById("nav").onclick = (event) => {
    event.preventDefault();
    
    // clear the section
    document.querySelector('#app').innerHTML = '';
    
    // console.log("clic nav");
    if (event.target !== event.currentTarget) {
      
      const tagName = event.target.dataset.filter;
      
      //Do stuff with json here
      let jsonData = data;
      
      let photographers =  data.photographers;

      function selectTag(photographer) {
        
        
        return photographer.tags.includes(event.target.dataset.filter);
      }
      let jsonfilter = photographers.filter(selectTag);
      
      let photographerDetails = "";
      function displayPhotographers(jsonfilter){
  
        // jsonfilter est un tableau d'objets
        
        let photographerDetails = "";

        jsonfilter.forEach((photographer)=>{
          const str = photographer.name;
          const dash = str.replace(" ", "-");
              // Il construit son HTML
              photographerDetails += `
                <div class="user" id=${photographer.id}>
                  <a href="?${dash}">
                  <div class="circle thumb">
                      <div class="crop">
                      <img src="img/${photographer.portrait}" alt="" />
                      </div>
                      <h2 class="name">${photographer.name}</h2>
                  </div>
                  </a>
                  <p class="city">${photographer.city}</p>
                  <p class="tagline">${photographer.tagline}</p>
                  <p class="price">${photographer.price} €/jour</p>
                  <ul class="tags">
                      ${photographer.tags
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

        return photographerDetails;
       // photographerDetails est du HTML
      
      }
      document.querySelector('#app').innerHTML += displayPhotographers(jsonfilter);
      // displayPhotographers(jsonfilter);
      
    }
  }
};

export { filterNav };