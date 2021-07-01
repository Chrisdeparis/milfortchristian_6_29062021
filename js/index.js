// create a photographer
const createAPhotographer = (name, id, city, country, tags, tagline, price, portrait) => {
    function hello() {
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

const reassignMethod = photograph1.hello;
console.log(photograph1);
console.log(reassignMethod());


//fetch API
fetch('db/FishEyeData.json')
    .then(res => res.json())
    .then(data => console.log(data))
