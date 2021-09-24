import { photographer } from "./photographer.js";
import data from "../FishEyeData.js";

const openContactModal = () => {
  const url_string = window.location.href;
  let url = new URL(url_string);
  const myparam = url.searchParams.get("id");
  const thumbImg = document.querySelectorAll(".thumb-img");
  let user;
  // object of user
  user = data.photographers.filter((person) => {
    if (person.id == myparam) {
      let firstname = person.name.split(" ");
      let pathuser = firstname[0];
      return pathuser;
    }
  });
  const contactModal = document.querySelector(".contact");

  // Get the modal
  const modal = document.getElementById("contactModal");

  // Get the button that opens the modal
  const btn = document.querySelector(".contact");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close-contact")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {

    modal.style.display = "block";
    document.getElementById("contactName").innerHTML = user[0].name;
    let html = document.getElementById("html");
    html.classList.add("scroll");
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    //remove scroll class
    let html = document.getElementById("html");
    html.classList.remove("scroll");
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
openContactModal();
