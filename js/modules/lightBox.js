// Router with hashchange event
console.log("lightbox test");
import { media } from "./media.js";
import data from "../FishEyeData.js";
// import {listPictures} from './media.js'

// Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une
// lightbox :

const openLightBox = () => {
  const url_string = window.location.href;
  console.log(url_string);
  let url = new URL(url_string);
  const myparam = url.searchParams.get("id");
  const thumbImg = document.querySelectorAll(".thumb-img");
  let user;

  // object of user
  user = data.photographers.filter((person) => {
    if (person.id == myparam) {
      let firstname = person.name.split(" ");
      let pathuser = firstname[0];
      console.log(pathuser);
      return pathuser;
    }
  });
  //liste des pictures
  console.log(thumbImg);
  let pathImg;
  let altTitle;

  //gallery algo
  let galleryImages = document.querySelectorAll(".gallery-img");
  let getLatestOpenedImg;
  let windowWidth = window.innerWidth;

  if (galleryImages) {
    galleryImages.forEach(function (image) {
      image.addEventListener('click', function (e) {
        //determine the image clicked
        let imageClicked = e.target.closest("div img");
        
        
        
        // Get the modal
        const modal = document.getElementById("openLightBox");
        const lightbox =  document.getElementById('lightbox')
        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0];
        let path = user[0].name.split(" ")[0];
        let boxImage = [];
        // afficher la modale
        modal.style.display = "block";
        document.getElementById("boxImage").src = imageClicked.src;
        document.getElementById("title").innerHTML = imageClicked.alt;
        // // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function (event) {
        //   if (event.target == lightbox) {
        //     modal.style.display = "none";
        //   }
        // };
      });
    });
  }

  // for (let i = 0; i < thumbImg.length; i++) {
  //   thumbImg[i].addEventListener("click", function () {
  //     console.log(thumbImg[i]);
  //     // Get the modal
  //     const modal = document.getElementById("openLightBox");
  //     // Get the <span> element that closes the modal
  //     const span = document.getElementsByClassName("close")[0];
  //     let path = user[0].name.split(" ")[0];
  //     let boxImage = [];

  //     pathImg = thumbImg[i].src.slice(21);
  //     altTitle = thumbImg[i].alt;

  //     console.log(pathImg);
  //     modal.style.display = "block";
  //     document.getElementById("boxImage").src = pathImg;
  //     document.getElementById("title").innerHTML = altTitle;

  //     // When the user clicks on <span> (x), close the modal
  //     span.onclick = function () {
  //       modal.style.display = "none";
  //     };
  //     // When the user clicks anywhere outside of the modal, close it
  //     window.onclick = function (event) {
  //       if (event.target == modal) {
  //         modal.style.display = "none";
  //       }
  //     };

  //     //list des medias de l'user
  //     console.log(thumbImg);
  //     let len = thumbImg.length;

  //     let current = thumbImg[i];
  //     let previous = thumbImg[i == 0 ? thumbImg.length - 1 : i - 1];
  //     let next = thumbImg[i == thumbImg.length - 1 ? 0 : i + 1];
  //     console.log(current);

  //     console.log(next);

  //     //when the user click on left chevron
  //     const chevronLeft = document.getElementById("chevronLeft");

  //     chevronLeft.onclick = function (event) {
  //       console.log("previous image");

  //       // console.log(previous);
  //       // let prevPathImg = previous.src.slice(21);
  //       // document.getElementById("boxImage").src = prevPathImg;
  //       // altTitle = previous.alt;
  //       // document.getElementById("title").innerHTML = altTitle;
  //     };
  //     // when the user click on right chevron
  //     const chevronRight = document.getElementById("chevronRight");
  //     chevronRight.onclick = function (event) {
  //       console.log(thumbImg);
  //       let list = (thumbImg);
  //       console.log("next image");
  //       //position de l'image current position
  //       console.log(next);

  //       // let pos = thumbImg.length - 8;
  //       // console.log(next);
  //       // console.log(next.src.slice(21));
  //       let nextPathImg = next.src.slice(21);
  //       document.getElementById("boxImage").src = nextPathImg;

  //       // altTitle = next.alt;
  //       // document.getElementById("title").innerHTML = altTitle;
  //     };

  //   });
  // }
};

openLightBox();
