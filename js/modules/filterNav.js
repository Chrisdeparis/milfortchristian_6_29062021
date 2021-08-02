import { getPhotographers } from './getPhotographers.js'
import { getJsonData } from './getJsonData.js'
import { showPhotographers } from './showPhotographers.js';

const filterNav = () => {
  // On click nav
  document.getElementById("nav").onclick = (event) => {
    console.log("clic nav");
    if (event.target !== event.currentTarget) {
      const tagName = event.target.dataset.filter;

      // Handle success
      //Do stuff with json here
      console.log("Do stuff with json");
      console.table(getPhotographers());
      let jsonData = getJsonData();
      console.log(jsonData);
      let photographers = jsonData.photographers;
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