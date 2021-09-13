import data from "../FishEyeData.js";
import { getPhotographers } from "./getPhotographers.js";

// Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa
// page.
// get photographer id from
const photographerPage = () => {
    console.table(data.photographers);
    let person;
    
    data.photographers.filter((person) => {
        console.log(person.id == "243");
        if(person.id == "243") {
            console.log(person);
            return person;
        }
    })

}
export { photographerPage };