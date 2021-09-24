import data from "../FishEyeData.js";

// Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa
// page.
// get photographer id from
const photographer = () => {
  const url_string = window.location.href;
  let url = new URL(url_string);
  const myparam = url.searchParams.get("id");

  data.photographers.filter((person) => {
    if (person.id == myparam) {
      document.getElementById("name").innerHTML = person.name;
      document.getElementById("city").innerHTML = person.city;
      document.getElementById("tagline").innerHTML = person.tagline;
      document.getElementById("price").innerHTML = person.price + "€ / jour";
      let pathPortrait = person.portrait;
      document.getElementById("portrait").innerHTML =
        "<img src='../img/" + pathPortrait + "'>";

      let res = document.getElementById("tags");

      for (let tag of person.tags) {
        res.innerHTML += `<li><a href="#" class="${tag}">#${tag}</a></li>`;
      }
      return person;
    }
  });
};

photographer();
export { photographer };
