import { media } from "./media.js";
import data from "../FishEyeData.js";
import { likes } from "./likes.js";

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
      
      image.addEventListener("click", function (e) {
        //determine the image clicked
        let imageClicked = e.target.closest("div .thumb-img");
        console.log(imageClicked);
        let videoClicked = e.target.closest("div video");
        let heartClicked = document.getElementsByClassName('.heart');
        console.log(heartClicked);

        // Get the modal
        const modal = document.getElementById("openLightBox");

        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0];
        //path for src route
        let path = user[0].name.split(" ")[0];

        if(heartClicked) {
          
          console.log('clic sur heart');
          let heartClicked = e.target.closest('.heart');
          console.log('heart Clicked');
          let totalLikes = document.getElementById('totalLikes').innerHTML;
          totalLikes += 1;
          
        }

        // afficher la modale
        modal.style.display = "block";
        //retirer le scroll en trop
        let html = document.getElementById("html");
        html.classList.add("scroll");

        

        if (imageClicked) {
          document.getElementById("boxVideo").style.display = "none";
          document.getElementById("boxImage").src = imageClicked.src;
          document.getElementById("title").innerHTML = imageClicked.alt;

          //recuperer data-p
          let actual = imageClicked.getAttribute("data-p");
          console.log(actual);

          //when the user click on left chevron previous element
          const chevronLeft = document.getElementById("chevronLeft");

          chevronLeft.onclick = function (event) {
            document.getElementById("boxVideo").style.display = "none";
            //la liste des medias
            let medias = JSON.parse(
              document.querySelector("#photoList").getAttribute("data-list")
            );
            //la liste des alt pour titre
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

              //if src = .mp4
              let mp4Video = medias[actual].includes(".mp4");

              if (mp4Video) {
                document.getElementById("boxImage").style.display = "none";
                document.getElementById('boxVideo').style.display = "block";
                document.getElementById("boxVideo").src =
                  "/img/Photos/" + path + "/" + medias[actual] + "";
                
              } else {
                document.getElementById("boxImage").style.display = "block";
                document.getElementById("boxVideo").style.display = "none";
              }

              document.getElementById("boxImage").src =
                "/img/Photos/" + path + "/" + medias[actual] + "";
              document.getElementById("title").innerHTML = altList[actual];
            }

            mySlide("prev");
          };

          //when the user click on right chevron next element
          const chevronRight = document.getElementById("chevronRight");

          chevronRight.onclick = function (event) {
            document.getElementById("boxVideo").style.display = "none";
            let medias = JSON.parse(
              document.querySelector("#photoList").getAttribute("data-list")
            );
            console.log(medias);
            let altList = JSON.parse(
              document.querySelector("#photoList").getAttribute("alt-list")
            );
            console.log(altList);

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

              //if src = .mp4
              let mp4Video = medias[actual].includes(".mp4");

              if (mp4Video) {
                document.getElementById("boxImage").style.display = "none";
                document.getElementById('boxVideo').style.display = "block";
                document.getElementById("boxVideo").src =
                  "/img/Photos/" + path + "/" + medias[actual] + "";
                
              } else {
                document.getElementById("boxImage").style.display = "block";
                document.getElementById("boxVideo").style.display = "none";
              }

              document.getElementById("boxImage").src =
                "/img/Photos/" + path + "/" + medias[actual] + "";
              document.getElementById("title").innerHTML = altList[actual];
            }

            mySlide("next");
          };
        }

        if (videoClicked) {
          document.getElementById("boxVideo").style.display = "block";
          document.getElementById("boxImage").style.display = "none";

          //recuperer data-p
          let actual = videoClicked.getAttribute("data-p");

          let altList = JSON.parse(
            document.querySelector("#photoList").getAttribute("alt-list")
          );
          document.getElementById("boxVideo").src = videoClicked.src;
          document.getElementById("title").innerHTML = altList[actual];

          //when the user click on left chevron previous element
          const chevronLeft = document.getElementById("chevronLeft");

          chevronLeft.onclick = function (event) {
            document.getElementById("boxImage").style.display = "block";
            document.getElementById("boxVideo").style.display = "none";

            let medias = JSON.parse(
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
              console.log(medias);
              document.getElementById("boxImage").src =
                "/img/Photos/" + path + "/" + medias[actual] + "";
              document.getElementById("title").innerHTML = altList[actual];
            }

            mySlide("prev");
          };

          //when the user click on right chevron next element
          const chevronRight = document.getElementById("chevronRight");

          chevronRight.onclick = function (event) {
            document.getElementById("boxImage").style.display = "block";
            document.getElementById("boxVideo").style.display = "none";

            let medias = JSON.parse(
              document.querySelector("#photoList").getAttribute("data-list")
            );
            console.log(medias);
            let altList = JSON.parse(
              document.querySelector("#photoList").getAttribute("alt-list")
            );
            console.log(altList);
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
                "/img/Photos/" + path + "/" + medias[actual] + "";
              document.getElementById("title").innerHTML = altList[actual];
            }

            mySlide("next");
          };
        }

        // // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          modal.style.display = "none";
          let html = document.getElementById("html");
          html.classList.remove("scroll");
        };
      });
      
    });
  }
};

openLightBox();
