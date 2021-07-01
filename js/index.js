// create a photographer
const createAPhotographer = (
  name,
  id,
  city,
  country,
  tags,
  tagline,
  price,
  portrait
) => {
  const hello = () => {
    console.log(`Hello ${name}`);
  };

  return {
    name,
    id,
    city,
    country,
    tags,
    tagline,
    price,
    portrait,
    hello,
  };
};

const photograph1 = createAPhotographer(
  "Mimi Keel",
  243,
  "London",
  "UK",
  ["portrait", "events", "travel", "animals"],
  "Voir le beau dans le quotidien",
  400,
  "MimiKeel.jpg"
);

console.log(photograph1);
const reassignMethod = photograph1.hello;
console.log(reassignMethod());

const fetchData = () => {
  //fetch API all the photographers
  fetch("db/FishEyeData.json")
    .then((res) => {
      if (!res.ok) {
        throw error("Error");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data.photographers);
      const html = data.photographers
        .map((user) => {
          return `        
            <div class="user">
                <a href="#">
                <div class="circle">
                    <div class="crop">
                    <img src="img/${user.portrait}" alt="" />
                    </div>
                    <h2 class="name">${user.name}</h2>
                </div>
                </a>
                <p class="city">${user.city}</p>
                <p class="tagline">${user.tagline}</p>
                <p class="price">${user.price} €/jour</p>
                <ul class="tags">
                    ${user.tags
                      .map((tag) =>
                        `
                    <li>
                        <a href="${tag}">#${tag}</a>
                    </li>
                `.trim()
                      )
                      .join("")}
                </ul>
            </div>
            `;
        })
        .join("");

      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    });
};

fetchData();




