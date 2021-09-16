console.log("test photographer")

import data from "./FishEyeData.js";

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
            console.log(pathPortrait);
            document.getElementById("portrait").innerHTML = "<img src='../img/"+pathPortrait+"'>";
            let virgule = person.tags.join(' ');
            console.log(virgule);
            const long = 1;
            // let roger = document.getElementById('tags)
            // for(tag of person.tags){
            // Florian TEISSIER16:07
            // roger.inneHTML += "<li><a......."
            // }
            
            let res = document.getElementById('tags');

            for(let tag of person.tags) {
                console.log(tag);
                res.innerHTML += `<li><a href="#" class="${tag}">#${tag}</a></li>`;
            }
            // document.getElementById('tags').innerHTML = person.tags.map((tag) => {
                    
            //         return `<li><a href="#" class="${tag}">#${tag}</a><li>`;
            //     }
                    
            // );
                

            
            // return person;
        }
    })
    

}

photographer();