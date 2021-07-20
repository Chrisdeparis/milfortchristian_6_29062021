// import Photographer from './Factory.js';
// import fetchData from './fetchData.js';
// import filterTag from './filterTag.js';
// import photographerPage from './photographerPage.js';
// import templateUser from "./templateUser.js";

// Factory Pattern
const textNode = document.querySelector("p");
document.getElementById("nav").onclick = (event)=>{
  console.log('clic nav');
    if(event.target !== event.currentTarget){
      
      
        const tagName = event.target.dataset.filter;
        
        // Ici tu  appelles la fonction qui crée la liste des photographes
        // eslint-disable-next-line no-inner-declarations
        const json = './FishEyeData.json';
        const data = JSON.parse(json);

        fetch('./FishEyeData.json')
        .then(function (response) {
          console.log(response.json());
          return response.json();
        })
        .then(function (data) {
          appendData(data);
        })
        .catch(function (err) {
          console.log(err);
        });

        

        function appendData(data) {
            const mainContainer = document.getElementById("app");
            for (let i = 0; i < data.length; i++) {
                const div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].name;
                mainContainer.appendChild(div);
            }
        }
        console.log(json);
        // function createPhotograph(tagName){
        //     // tu fais un filter sur le json entier qui retourne la jsonList
            
        //     const jsonList = JSON.parse('../db/FishEyeData.json').filter(function (tagName) {
        //       return ;
        //     });
        //     // tu appelles la factory
        //     // Regarder documentfragment            
        //     factory(type = "create photographs list", jsonList);
        // }
        // function factory() {
        //   return 'factory';
        // }
        console.log(data);
        // console.log(jsonList);
        // createPhotograph();
       
       
    }
 
}




//Liste de tous les photographes avec leur nom, leur slogan, leur localisation,
//leur prix/heure, leurs tags et une image miniature de leur choix.
// const fetchData = () => {
//   //fetch API all the photographers
//   fetch("db/FishEyeData.json")
//     .then((res) => {
//       if (!res.ok) {
//         let error;
//         throw error("Error");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.photographers);
//       const html = data.photographers
//         .map((user) => {
//             const str = user.name;
//             const dash = str.replace(" ","-");
//             console.log(dash);
//           return `        
//             <div class="user ">
//                 <a href="#${dash}">
//                 <div class="circle thumb">
//                     <div class="crop">
//                     <img src="img/${user.portrait}" alt="" />
//                     </div>
//                     <h2 class="name">${user.name}</h2>
//                 </div>
//                 </a>
//                 <p class="city">${user.city}</p>
//                 <p class="tagline">${user.tagline}</p>
//                 <p class="price">${user.price} €/jour</p>
//                 <ul class="tags">
//                     ${user.tags
//                       .map((tag) =>
//                         `
//                     <li>
//                         <a href="#" class="${tag}">#${tag}</a>
//                     </li>
//                 `.trim()
//                       )
//                       .join("")}
//                 </ul>
//             </div>
//             `;
//         })
//         .join("");

//       document.querySelector("#app").insertAdjacentHTML("afterbegin", html);

//       // Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa
//       // page.

//       const photographerPage = () => {
//         const thumbnails = document.querySelectorAll('.thumb');
//         console.log(thumbnails);
//         for (let i = 0; i < thumbnails.length; i++) {
//           thumbnails[i].addEventListener("click", () => {
//             console.log("thumb Clicked N° " + i + ' ouvre la page');
            

//          });
//         }
//       };
     
//       photographerPage();

      

//     });
// };

// fetchData();

// En cliquant sur une étiquette (tag) dans la barre de navigation, la liste des
// photographes est filtrée pour n'afficher que ceux qui correspondent à cette
// étiquette.

// const filterTag = (data, user) => {
    
//   const btns = document.querySelectorAll(".btn");
  
//   for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", (e) => {

//       const filter = e.target.dataset.filter;
//       const tagName = document.getElementsByClassName(filter);
//       const listUsers = document.querySelectorAll(".user");
      
//       e.preventDefault();
//       console.log(filter);
//       console.log(listUsers);

//       listUsers.forEach((user) => {
        
//         console.log(user);
//         if (filter === "all") {
            
//           console.log("filter === all");
//           user.style.display = "block";
//           console.log(user);
//         } else {
//           console.log(filter);
//           console.log(tagName);
//           user.style.display = "none";
//           if (tagName) {
//             console.log("filter click = " + filter);
//             let j;
//             for (j = 0; j < tagName.length; j++) {
//               console.log(tagName[j].parentElement.parentElement.parentElement);
//               tagName[
//                 j
//               ].parentElement.parentElement.parentElement.style.display =
//                 "block";
//             }
//           }
//         }
//       });
//     });
//   }
// };

// filterTag();

//Router with hashchange event
// class IndexView {
//   constructor(){
//     window.addEventListener("hashchange", e => this.onRouteChange(e));
//     this.slot = document.querySelector('#slot');
//   }
//   onRouteChange(e) {
//     const hashLocation = window.location.hash.substring(1);
//     console.log(hashLocation);    
//     this.loadContent(hashLocation);
//   }
//   loadContent(uri) {
//     const contentUri = `${uri}.html`;
//     fetch(contentUri)
//       .then(res => res.text())
//       .then(content => this.updateSlot(content));
//   }
//   updateSlot(content) {
//     this.slot.innerHTML = content;

//     // Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une
//     // lightbox :
//     const openLightBox = () => {
//       const thumbImg = document.querySelectorAll('.thumb-img');

//       for(let i=0; i<thumbImg.length; i++) {
//         // Get the modal
//         const modal = document.getElementById("openLightBox");

//         // Get the <span> element that closes the modal
//         const span = document.getElementsByClassName("close")[0];
//         // Get the thumb img that opens the modal
//         thumbImg[i].addEventListener('click', (e) => {
//             console.log('open lightbox n° '+i);
//             modal.style.display = 'block';
            
//             // When the user clicks on <span> (x), close the modal
//             span.onclick = function() {
//               modal.style.display = "none";
//             }
//             // When the user clicks anywhere outside of the modal, close it
//             window.onclick = function(event) {
//               if (event.target == modal) {
//                 modal.style.display = "none";
//               }
//             } 

//           });
//         }
//       }

//       openLightBox();

//       const openContactModal = () => {
//         const contactModal = document.querySelector(".contact");

//         // Get the modal
//         var modal = document.getElementById("contactModal");

//         // Get the button that opens the modal
//         var btn = document.querySelector(".contact");

//         // Get the <span> element that closes the modal
//         var span = document.getElementsByClassName("close-contact")[0];

//         // When the user clicks on the button, open the modal
//         btn.onclick = function() {
//           console.log('clic contact btn');
//           modal.style.display = "block";
//         }

//         // When the user clicks on <span> (x), close the modal
//         span.onclick = function() {
//           modal.style.display = "none";
//         }

//         // When the user clicks anywhere outside of the modal, close it
//         window.onclick = function(event) {
//           if (event.target == modal) {
//             modal.style.display = "none";
//           }
//         }

//       }
//       openContactModal();
//   }
// }


// new IndexView();


