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
  console.log(thumbImg);
  let pathImg;
  for(let i= 0; i<thumbImg.length; i++){
    thumbImg[i].addEventListener('click', function(){
      console.log(thumbImg[i]);
      // Get the modal
      const modal = document.getElementById("openLightBox");
      // Get the <span> element that closes the modal
      const span = document.getElementsByClassName("close")[0];
      let path = user[0].name.split(" ")[0];
      let boxImage = [];
      // let listPictures = media();
     
      pathImg = thumbImg[i].src.slice(21);
      
      
      // 
      console.log(pathImg);
      modal.style.display = "block";
      document.getElementById("boxImage").src = pathImg;
      // document.getElementById("title").innerHTML = altTitle;

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
        
      };
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      let altTitle = "";

      let pictureId = "";
      //when the user click on left chevron
      const chevronLeft = document.getElementById("chevronLeft");
      chevronLeft.onclick = function (event) {
        console.log("previous image");
        // console.log(media);
      };
      // when the user click on right chevron
      const chevronRight = document.getElementById("chevronRight");
      chevronRight.onclick = function (event) {
        console.log("next image");
      };

    })
    // console.log(pathImg);
    // document.getElementById("boxImage").id = pictureId;
    // 
    // document.getElementById('boxImage').alt =  altTitle;
    // 

  }
}


openLightBox();
