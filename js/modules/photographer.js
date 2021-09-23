console.log("test photographer")

import data from "../FishEyeData.js";

// Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa
// page.
// get photographer id from
const photographer = () => {
    console.table(data.photographers);
    let person;
    const url_string = window.location.href;
    console.log(url_string);
    let url = new URL(url_string);
    const myparam = url.searchParams.get('id');
    console.log(myparam);

    
    data.photographers.filter((person) => {
        console.log(person.id == myparam);
        if(person.id == myparam) {
            console.log(person);
            document.getElementById('name').innerHTML = person.name;
            document.getElementById('city').innerHTML = person.city;
            document.getElementById('tagline').innerHTML = person.tagline;
            document.getElementById('price').innerHTML = person.price+'€ / jour';
            let pathPortrait = person.portrait;
            document.getElementById("portrait").innerHTML = "<img src='../img/"+pathPortrait+"'>";
            
            let res = document.getElementById('tags');

            for(let tag of person.tags) {
                console.log(tag);
                res.innerHTML += `<li><a href="#" class="${tag}">#${tag}</a></li>`;
            }
            return person;
            
        }
    })
    

}

photographer();
export { photographer };