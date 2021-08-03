import { getPhotographers } from './getPhotographers.js'
import { getJsonData } from './getJsonData.js'

let jsonData;

if(1 ==1) {
    jsonData = getJsonData();
}

const filterNav = () => {
  // On click nav
  document.getElementById("nav").onclick = (event) => {
    console.log("clic nav");
    if (event.target !== event.currentTarget) {
      const tagName = event.target.dataset.filter;
      
      // Handle success
      //Do stuff with json here
      console.log("Do stuff with json");
      console.table(getJsonData());
      let jsonData = getJsonData();
        
      console.table(jsonData);
      let photographers =  jsonData.photographers;
      console.table(photographers);

      function selectTag(photographer) {
        console.log(photographer);
        console.log(event.target.dataset.filter);
        return photographer.tags.includes(event.target.dataset.filter);
      }
      let jsonfilter = photographers.filter(selectTag);
      console.log(tagName + " a " + jsonfilter.length + " photographes");
      console.table(jsonfilter);
      console.log("affiche la section photographe");
    }
  };
};

export { filterNav };