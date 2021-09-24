import data from "../FishEyeData.js";
import { getPhotographers } from "./getPhotographers.js";

// Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa
// page.
// get photographer id from
const photographerPage = () => {
    
    let person;
    
    data.photographers.filter((person) => {
        
        if(person.id == "243") {
            
            return person;
        }
    })

}
export { photographerPage };