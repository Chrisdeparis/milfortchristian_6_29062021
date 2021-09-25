import { media } from "./media.js";
import data from "../FishEyeData.js";
import { likes } from './likes.js';

// Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une
// lightbox :
const openLightBox = () => {
  const url_string = window.location.href;
  let url = new URL(url_string);
  const myparam = url.searchParams.get("id");
  const thumbImg = document.getElementsByClassName("thumb-img");
  let user;

  // object of user
  user = data.photographers.filter((person) => {
    if (person.id == myparam) {
      let firstname = person.name.split(" ");
      let pathuser = firstname[0];
      return pathuser;
    }
  });

  //gallery
  let galleryImages = document.querySelectorAll(".gallery-img");
  
  likes();
  if (galleryImages) {
    galleryImages.forEach(function (image) {
      console.log(image);
      image.addEventListener("click", function (e) {
        //determine the image clicked
        let imageClicked = e.target.closest("div img");

        // Get the modal
        const modal = document.getElementById("openLightBox");

        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0];
        //path for src route
        let path = user[0].name.split(" ")[0];

        // afficher la modale
        modal.style.display = "block";
        //retirer le scroll en trop
        let html = document.getElementById("html");
        html.classList.add("scroll");

        // document.getElementById("boxImage").src = imageClicked.src;
        document.getElementById("title").innerHTML = imageClicked.alt;

        //recuperer data-p
        let actual = imageClicked.getAttribute("data-p");
        // // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          modal.style.display = "none";
          let html = document.getElementById("html");
          html.classList.remove("scroll");
        };

        //when the user click on left chevron previous element
        const chevronLeft = document.getElementById("chevronLeft");

        chevronLeft.onclick = function (event) {
          let image2 = JSON.parse(
            document.querySelector("#photoList").getAttribute("data-list")
          );
          let altList = JSON.parse(
            document.querySelector("#photoList").getAttribute("alt-list")
          );

          let images = thumbImg;
          let limit = images.length - 1;

          function mySlide(param) {
            if (param === "prev") {
              if (actual == 0) {
                actual = limit;
              } else {
                actual--;
              }
            } else {
              if (actual == limit) {
                actual = 0;
              } else {
                actual++;
              }
            }
            console.log(image2);
            document.getElementById("boxImage").src =
              "/img/Photos/" + path + "/" + image2[actual] + "";
            document.getElementById("title").innerHTML = altList[actual];
          }

          mySlide("prev");
        };

        //when the user click on right chevron next element
        const chevronRight = document.getElementById("chevronRight");

        chevronRight.onclick = function (event) {
          let image2 = JSON.parse(
            document.querySelector("#photoList").getAttribute("data-list")
          );
          let altList = JSON.parse(
            document.querySelector("#photoList").getAttribute("alt-list")
          );

          let i = 0,
            images = thumbImg;
          let limit = images.length - 1;

          function mySlide(param) {
            if (param === "next") {
              if (actual == 0) {
                actual = limit;
              } else {
                actual--;
              }
            } else {
              if (actual == limit) {
                actual = 0;
              } else {
                actual++;
              }
            }
            
            document.getElementById("boxImage").src =
              "/img/Photos/" + path + "/" + image2[actual] + "";
            document.getElementById("title").innerHTML = altList[actual];
          }

          mySlide("next");
        };
      });
    });
  }
};

openLightBox();
