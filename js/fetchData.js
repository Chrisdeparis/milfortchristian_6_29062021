//Liste de tous les photographes avec leur nom, leur slogan, leur localisation,

import templateUser from "./templateUser.js";

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
      return templateUser;
    });
};

fetchData();

export default fetchData;