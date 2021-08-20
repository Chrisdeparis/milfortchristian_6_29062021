import data from "../FishEyeData.js";

// Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa
// page.
// get photographer id from
const photographerPage = (data) => {
    // methode propagation d'evenements du parent to child
    let users = document.querySelector('#app');
    console.log("🚀 ~ file: photographerPage.js ~ line 8 ~ photographerPage ~ users", users)

    // if click on user
    users.addEventListener('click', (event)=> {
        event.preventDefault();
        
        // determiner quel user a été cliqué
        if(event.target !== event.currentTarget){
            //retrouver le user DOM ELEMENT
            let userId = event.target.parentNode.closest('.user');
            // retrouver l'ID 
            let idOfElement = userId.getAttribute('id');
            console.log('clic sur user = '+idOfElement);  
       }
       
    
       return false;
        // Afficher la page de profil de user
    });
    // retourne une collection foreach
    // mais un id sur le bloc app
    //
    
    const queryString = window.location.search.substring(1);
    console.log("🚀 ~ file: photographerPage.js ~ line 9 ~ photographerPage ~ queryString", queryString)
    
    
    // add the profile page

    

}
export {photographerPage};