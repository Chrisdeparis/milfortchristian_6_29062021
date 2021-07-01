// create a photographer
const createAPhotographer = (name, id, city, country, tags, tagline, price, portrait) => {
    const hello = () => {
        console.log(`Hello ${name}`);
    }
    
    return {
        name,
        id,
        city, 
        country,
        tags,
        tagline,
        price, 
        portrait,
        hello
    }
}


const photograph1 = createAPhotographer("Mimi Keel", 243, "London", "UK", [
    "portrait",
    "events",
    "travel",
    "animals"
    ], "Voir le beau dans le quotidien", 400, "MimiKeel.jpg");


console.log(photograph1);
const reassignMethod = photograph1.hello;
console.log(reassignMethod());


const fetchData = () => {
    //fetch API all the photographers
    fetch('db/FishEyeData.json')
    .then(res => {
        if(!res.ok) {
            throw error('Error');
        }
        return  res.json();
    })
    .then(data => {
        console.log(data.photographers)
        const html = data.photographers.map(user => {
            return `<h2>${user.name}</h2>`;
        }).join('');
        console.log(html);
        document
        .querySelector("#app")
        .insertAdjacentHTML('afterbegin', html);
    });
}

fetchData();

// get A photographer
// const photograph = getAPhotographer(
//     fetch('db/FishEyeData.json')
//     .then(res => res.json())
//     .then(data => console.log(data.photographers[0])));
    
// console.log(photograph);



//