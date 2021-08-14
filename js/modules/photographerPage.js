import data from "../FishEyeData.js";

// Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa
// page.
// get photographer id from
const photographerPage = (data) => {
    let user = document.querySelectorAll('.user');
    
    
    const queryString = window.location.search.substring(1);
    console.log("🚀 ~ file: photographerPage.js ~ line 9 ~ photographerPage ~ queryString", queryString)
    user.addEventListener("click", () => {
        console.log('show page profile');
    });
    
    // add the profile page

    

}
export {photographerPage};